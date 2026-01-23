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
  public readonly fixedPathTranslate = 'NEXT_GAME.CREATE_ACCOUNT.';

  public mail = '';
  public password = '';
  public confirmPassword = '';
  public firstName = '';
  public lastName = '';

  public errorMessage = '';
  public isloading = false;

  public passwordEye = false;
  public confirmPasswordEye = false;

  constructor(
    private readonly headerService: HeaderService,
    private readonly fireBaseService: FireBaseService
  ) {}

  public ngOnInit(): void {
    this.headerService.selectPage(7);
  }

  private initVal(): void {
    this.mail = '';
    this.password = '';
    this.confirmPassword = '';
    this.errorMessage = '';
  }

  private checkForamtMail(mail: string): boolean {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(mail);
  }

  private missingRequiredFields(): boolean {
    return (
      !this.mail ||
      !this.password ||
      !this.confirmPassword ||
      !this.firstName ||
      !this.lastName
    );
  }

  public createAccount(): void {
    // validation
    if (this.missingRequiredFields()) {
      this.errorMessage = this.fixedPathTranslate + 'ERRORS.ERROR_1';
      return;
    }

    if (this.checkForamtMail(this.mail)) {
      this.errorMessage = this.fixedPathTranslate + 'ERRORS.ERROR_3';
      return;
    }

    if (this.password.length < 8) {
      this.errorMessage = this.fixedPathTranslate + 'ERRORS.ERROR_2';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = this.fixedPathTranslate + 'ERRORS.ERROR_4';
      return;
    }

    // action
    this.isloading = true;

    this.fireBaseService
      .createUserWithEmailAndPassword(this.mail, this.password)
      .then((res) => {
        console.log(res);
        // si tu veux garder la méthode, tu peux la laisser ici sans changer la logique globale
        // this.initVal();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
