import { Component } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { FixedModule } from '../../Fixed_module';

@Component({
  selector: 'app-connect-us',
  imports: [FixedModule],
  templateUrl: './connect-us.component.html',
  styleUrl: './connect-us.component.scss',
})
export class ConnectUsComponent {
  public errorMessage: string = '';
  public isloading: boolean = false;
  public fixedPathTranslate: string = 'NEXT_GAME.CONNECT_US.';
  public info: any = {
    first_name: '',
    last_name: '',
    email: '',
    object: '',
    number: '',
    message: '',
  };

  constructor(public headerService: HeaderService) {}
  paysIndex: string[] = ['+212', '+33', '+1', '+44', '+49', '+216', '+213'];

  ngOnInit(): void {
    this.headerService.selectPage(4);
  }

  public validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  public validateNumber(number: string): boolean {
    const numberRegex = /^[0-9]+$/;
    return numberRegex.test(number);
  }

  public validateMessage(message: string): boolean {
    return message.length > 10;
  }

  public send() {
    if (
      this.info.first_name === '' ||
      this.info.last_name === '' ||
      this.info.email === '' ||
      this.info.object === '' ||
      this.info.number === '' ||
      this.info.message === ''
    ) {
      this.errorMessage = this.fixedPathTranslate + 'ERRORS.ERROR_1';
    } else if (!this.validateEmail(this.info.email)) {
      this.errorMessage = this.fixedPathTranslate + 'ERRORS.ERROR_2';
    } else if (!this.validateNumber(this.info.number)) {
      this.errorMessage = this.fixedPathTranslate + 'ERRORS.ERROR_3';
    } else if (!this.validateMessage(this.info.message)) {
      this.errorMessage = this.fixedPathTranslate + 'ERRORS.ERROR_4';
    } else {
      this.errorMessage = '';
    }
  }
}
