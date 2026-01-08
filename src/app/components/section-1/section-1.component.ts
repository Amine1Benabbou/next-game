import { FixedModule } from './../../Fixed_module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section-1',
  imports: [FixedModule],
  templateUrl: './section-1.component.html',
  styleUrl: './section-1.component.scss'
})
export class Section1Component {
  public fixedPathTranslate: string = 'NEXT_GAME.SECTION_1.';
}
