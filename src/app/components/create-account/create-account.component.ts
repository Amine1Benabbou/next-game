import { Component } from '@angular/core';
import { FixedModule } from '../../Fixed_module';
import { HeaderService } from '../../services/header.service';
import { FireBaseService } from '../../services/fire-base.service';

@Component({
  selector: 'app-create-account',
  imports: [FixedModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss',
})
export class CreateAccountComponent {
  public fixedPathTranslate: string = 'NEXT_GAME.CREATE_ACCOUNT.';
  public mail: string = '';
  public password: string = '';
  public confirmPassword: string = '';
  public errorMessage: string = '';
  public isloading: boolean = false;
  public passwordEye: boolean = false;
  public confirmPasswordEye: boolean = false;
  public firstName: string = '';
  public lastName: string = '';

  constructor(
    private readonly headerService: HeaderService,
    private readonly fireBaseService: FireBaseService
  ) {}

  ngOnInit(): void {
    this.headerService.selectPage(7);
  }

  private initVal() {
    this.mail = '';
    this.password = '';
    this.confirmPassword = '';
    this.errorMessage = '';
  }

  private checkForamtMail(mail: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(mail);
  }

  public createAccount() {
    if (
      !this.mail ||
      !this.password ||
      !this.confirmPassword ||
      !this.firstName ||
      !this.lastName
    ) {
      this.errorMessage = this.fixedPathTranslate + 'ERRORS.ERROR_1';
      return;
    } else if (this.checkForamtMail(this.mail)) {
      this.errorMessage = this.fixedPathTranslate + 'ERRORS.ERROR_3';
      return;
    } else if (this.password.length < 8) {
      this.errorMessage = this.fixedPathTranslate + 'ERRORS.ERROR_2';
      return;
    } else if (this.password !== this.confirmPassword) {
      this.errorMessage = this.fixedPathTranslate + 'ERRORS.ERROR_4';
      return;
    } else {
      this.fireBaseService
        .createUserWithEmailAndPassword(this.mail, this.password)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    this.isloading = true;
  }
}
