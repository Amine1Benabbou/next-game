import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay()), provideFirebaseApp(() => initializeApp({ projectId: "next-game-firebase", appId: "1:374136098069:web:66136abd9f47ea84b2ad1c", storageBucket: "next-game-firebase.firebasestorage.app", apiKey: "AIzaSyBFoHdfOQURN50kSYtWOnBnaYRxdnPTE8g", authDomain: "next-game-firebase.firebaseapp.com", messagingSenderId: "374136098069", projectNumber: "374136098069", version: "2" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
  ]
};
