import { FireBaseService } from './../../services/fire-base.service';
import { Component } from '@angular/core';
import { FixedModule } from '../../Fixed_module';

@Component({
  selector: 'app-section-3',
  imports: [FixedModule],
  templateUrl: './section-3.component.html',
  styleUrl: './section-3.component.scss',
})
export class Section3Component {
  public fixedPathTranslate: string = 'NEXT_GAME.SECTION_3.';
  public email: string = '';
  public submitted: boolean = false;
  public error: string = '';

  constructor(private readonly fireBaseService : FireBaseService){}

  checkEmailFormat(mail: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(mail);
  }

  public onSubmit() {
    if (this.email === '') {
      this.error = 'ERROR_1';
    } else if (!this.checkEmailFormat(this.email)) {
      this.error = 'ERROR_2';
    } else {
      this.error = '';
      this.submitted = true;
      this.email = '';

      this.fireBaseService.addEmailToTombola(this.email);
    }
  }
}
