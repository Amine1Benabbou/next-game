import { Component, OnInit } from '@angular/core';
import { FixedModule } from '../../Fixed_module';
@Component({
  selector: 'app-section-1-main-page',
  imports: [FixedModule],
  templateUrl: './section-1-main-page.component.html',
  styleUrl: './section-1-main-page.component.scss',
})
export class Section1MainPageComponent implements OnInit {
  public image: string = '../../../assets/imgs/main_page/section-1/3.jpg';
  public images: string[] = [
    '../../../assets/imgs/main_page/section-1/3.jpg',
    '../../../assets/imgs/main_page/section-1/4.jpg',
    '../../../assets/imgs/main_page/section-1/5.jpg',
    '../../../assets/imgs/main_page/section-1/6.jpg',
    '../../../assets/imgs/main_page/section-1/7.jpg',
  ];
  public currentIndex: number = 0;
  public fixedPathTranslate: string = 'NEXT_GAME.SECTION_1_MAIN_PAGE.';

  timeInterval: number = 100;

  ngOnInit(): void {
    this.loppingPicture();
  }

  loppingPicture() {
    const loop = () => {
      this.currentIndex++;

      if (this.currentIndex >= this.images.length) {
        this.currentIndex = 0;
      }

      this.image = this.images[this.currentIndex];

      if (this.timeInterval < 4000) this.timeInterval += 10;

      setTimeout(loop, this.timeInterval);
    };

    loop();
  }

  previousImage() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.images.length - 1;
    }
    this.image = this.images[this.currentIndex];
  }

  nextImage() {
    this.currentIndex++;
    if (this.currentIndex >= this.images.length) {
      this.currentIndex = 0;
    }
    this.image = this.images[this.currentIndex];
  }
}
