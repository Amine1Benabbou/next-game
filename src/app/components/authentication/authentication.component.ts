import { FireBaseService } from './../../services/fire-base.service';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { FixedModule } from '../../Fixed_module';
import { Router } from '@angular/router';

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

  constructor(private readonly headerService: HeaderService,
    private readonly fireBaseService : FireBaseService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.headerService.selectPage(6);
  }

  private initVal() {
    this.errorMessage = '';
    this.password = '';
    this.mail = '';
  }

  private checkForamtMail(mail: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(mail);
  }

  public async authentication() {
    this.router.navigate(['/page-user']);
    if (!this.mail || !this.password) {
      this.errorMessage = this.fixedPathTranslate + 'ERRORS.ERROR_1';
      return;
    }
    else if(this.checkForamtMail(this.mail)){
      this.errorMessage = this.fixedPathTranslate + 'ERRORS.ERROR_3';
      return;
    }
    else if(this.password.length < 8){
      this.errorMessage = this.fixedPathTranslate + 'ERRORS.ERROR_2';
      return;
    }
    else {
      this.fireBaseService.signInWithEmailAndPassword(this.mail, this.password).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
    }
    this.isloading = true;
  }
}
