import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FireBaseService } from './../../services/fire-base.service';
import { HeaderService } from '../../services/header.service';
import { FixedModule } from '../../Fixed_module';

@Component({
  selector: 'app-authentication',
  imports: [FixedModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss',
})
export class AuthenticationComponent implements OnInit {
  public mail: string = '';
  public password: string = '';
  public errorMessage: string = '';
  public isloading: boolean = false;
  public fixedPathTranslate: string = 'NEXT_GAME.AUTHENTICATION.';
  public passwordEye: boolean = false;

  constructor(
    private readonly headerService: HeaderService,
    private readonly fireBaseService: FireBaseService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.headerService.selectPage(6);
  }

  private initVal(): void {
    this.mail = '';
    this.password = '';
    this.errorMessage = '';
  }

  private checkForamtMail(mail: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(mail);
  }

  public async authentication(): Promise<void> {
    if (!this.mail || !this.password) {
      this.errorMessage = this.fixedPathTranslate + 'ERRORS.ERROR_1';
      return;
    }

    if (!this.checkForamtMail(this.mail)) {
      this.errorMessage = this.fixedPathTranslate + 'ERRORS.ERROR_3';
      return;
    }

    if (this.password.length < 8) {
      this.errorMessage = this.fixedPathTranslate + 'ERRORS.ERROR_2';
      return;
    }

    this.isloading = true;
    this.errorMessage = '';

    try {
      const res = await this.fireBaseService.signInWithEmailAndPassword(
        this.mail,
        this.password
      );

      console.log('User signed in:', res);
      this.initVal();
      this.router.navigate(['/page-user']);
    } catch (err: any) {
      console.error('Sign in error:', err);
      this.errorMessage = err?.message || 'Failed to sign in';
    } finally {
      this.isloading = false;
    }
  }
}
