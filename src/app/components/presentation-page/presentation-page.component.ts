import { Component } from '@angular/core';
import { Section1Component } from '../section-1/section-1.component';
import { Section2Component } from '../section-2/section-2.component';
import { Section3Component } from '../section-3/section-3.component';
import { FinalCtaComponent } from '../finale-cta/finale-cta.component';

@Component({
  selector: 'app-presentation-page',
  imports: [Section1Component, Section2Component, Section3Component, FinalCtaComponent],
  templateUrl: './presentation-page.component.html',
  styleUrl: './presentation-page.component.scss'
})
export class PresentationPageComponent {

}
