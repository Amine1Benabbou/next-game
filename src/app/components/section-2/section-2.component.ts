import { Component } from '@angular/core';
import { FixedModule } from '../../Fixed_module';

@Component({
  selector: 'app-section-2',
  imports: [FixedModule],
  templateUrl: './section-2.component.html',
  styleUrl: './section-2.component.scss',
})
export class Section2Component {
  public fixedPathTranslate: string = 'NEXT_GAME.SECTION_2.';
  public carouselIsScrolling = false;
  public carouselImages: any[] = [
    { src: 'assets/imgs/main_page/section-1/7.jpg', alt: 'Jeu 6' },
    { src: 'assets/imgs/main_page/section-1/10.jpg', alt: 'Jeu 9' },
    { src: 'assets/imgs/main_page/section-1/20.jpg', alt: 'Jeu 9' },
    { src: 'assets/imgs/main_page/section-1/11.jpg', alt: 'Jeu 9' },
  ];

  public currentCarouselIndex = 0;
Math: any;

  public carouselScroll(direction: 'left' | 'right') {
    const el = document.getElementById('carousel-track');
    if (!el) return;

    // On détermine la largeur d'une carte (w-60 ou min-w-60 Tailwind = 15rem = 240px) + gap (gap-10 = 2.5rem = 40px)
    const cardWidth = 240;
    const cardGap = 40;
    const scrollAmount = cardWidth + cardGap;

    if (direction === 'right') {
      if (this.currentCarouselIndex < this.carouselImages.length - 1) {
        this.currentCarouselIndex++;
      } else {
        this.currentCarouselIndex = 0;
      }
    } else if (direction === 'left') {
      if (this.currentCarouselIndex > 0) {
        this.currentCarouselIndex--;
      } else {
        this.currentCarouselIndex = this.carouselImages.length - 1;
      }
    }

    el.scrollTo({
      left: this.currentCarouselIndex * scrollAmount,
      behavior: 'smooth',
    });
  }
}
