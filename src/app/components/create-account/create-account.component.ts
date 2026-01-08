import { Component } from '@angular/core';
import { FixedModule } from '../../Fixed_module';
import { HeaderService } from '../../services/header.service';
import { FireBaseService } from '../../services/fire-base.service';
import { Router } from '@angular/router';

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
    private readonly fireBaseService: FireBaseService,
    private readonly router: Router
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

  public async createAccount() {
    if (
      !this.mail ||
      !this.password ||
      !this.confirmPassword ||
      !this.firstName ||
      !this.lastName
    ) {
      this.errorMessage = this.fixedPathTranslate + 'ERRORS.ERROR_1';
      return;
    } else if (!this.checkForamtMail(this.mail)) {
      this.errorMessage = this.fixedPathTranslate + 'ERRORS.ERROR_3';
      return;
    } else if (this.password.length < 8) {
      this.errorMessage = this.fixedPathTranslate + 'ERRORS.ERROR_2';
      return;
    } else if (this.password !== this.confirmPassword) {
      this.errorMessage = this.fixedPathTranslate + 'ERRORS.ERROR_4';
      return;
    }
    
    this.isloading = true;
    this.errorMessage = '';
    
    try {
      const res = await this.fireBaseService.createUserWithEmailAndPassword(this.mail, this.password);
      console.log('User account created:', res);
      this.initVal();
      // Redirect to login page after successful account creation
      this.router.navigate(['/main-page/auth']);
    } catch (err: any) {
      console.error('Account creation error:', err);
      this.errorMessage = err.message || 'Failed to create account';
    } finally {
      this.isloading = false;
    }
  }
}
