import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CommonFunctionsService } from './common-functions.service';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  public currentPage: number = 0;
  public pages: boolean[] = [false, false, false, false, false, false, false];
  public OpenChatIa: boolean = false;
  public isMenuOpen: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly commonFunction: CommonFunctionsService
  ) {}

  selectPage(page: number): void {
    window.scrollTo(0, 0);
    this.currentPage = page;
    this.pages.fill(false);
    this.pages[page] = true;
  }

  public switchToAccountCreation() {
    this.commonFunction.scrollToElement('account-choice-id');
  }
}
