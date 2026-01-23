import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// 🔥 Imports Firebase Angular
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
// (optionnel) si tu veux analytics plus tard :
// import { provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent,
    
    // 🔥 Initialisation Firebase pour Angular (moved to providers)
  ],
  
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    // (optionnel) analytics :
    // provideAnalytics(() => getAnalytics()),
  ],
  // providers: [ScreenTrackingService, UserTrackingService], // seulement si tu utilises analytics
})
export class AppModule {}
