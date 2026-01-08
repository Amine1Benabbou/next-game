import { Component, ElementRef } from '@angular/core';
import { CommonFunctionsService } from '../../services/common-functions.service';
import { FixedModule } from '../../Fixed_module';

@Component({
  selector: 'app-final-cta',
  templateUrl: './finale-cta.component.html',
  styleUrls: ['./finale-cta.component.scss'],
  imports: [FixedModule],
})
export class FinalCtaComponent {
  public annimationLaunch: boolean = false;
  public fixedPathTranslate: string = 'NEXT_GAME.FINALE_CTA.';

  constructor(private el: ElementRef, public commonFunctionService : CommonFunctionsService) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.annimationLaunch = true;
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(this.el.nativeElement);
  }
}
