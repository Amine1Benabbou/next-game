import { Routes } from '@angular/router';
import { PresentationPageComponent } from './components/presentation-page/presentation-page.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';
import { ConnectUsComponent } from './components/connect-us/connect-us.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PageUserComponent } from './components/page-user/page-user.component';
import { PresentationMainPageComponent } from './components/presentation-main-page/presentation-main-page.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { ListeSaveComponent } from './components/liste-save/liste-save.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main-page', pathMatch: 'full' },
  {
    path: 'main-page',
    component: MainPageComponent,
    children: [
      { path: '', component: PresentationPageComponent },
      { path: 'home', component: PresentationPageComponent },
      { path: 'auth', component: AuthenticationComponent },
      { path: 'create-account', component: CreateAccountComponent },
      { path: 'faq', component: FaqPageComponent },
      { path: 'help', component: ConnectUsComponent },
    ],
  },
  {
    path: 'page-user',
    component: PageUserComponent,
    children: [
      { path: '', component: PresentationMainPageComponent },
      { path: 'home', component: PresentationMainPageComponent },
      { path: 'game/:id', component: GameDetailsComponent },
      { path: 'list-save', component: ListeSaveComponent },
    ],
  },

  {path : "*", redirectTo: "main-page", pathMatch: "full"},
];
