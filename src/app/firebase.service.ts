import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  app = initializeApp({
    apiKey: "AIzaSyBFoHdfOQURN50kSYtWOnBnaYRxdnPTE8g",
    authDomain: "next-game-firebase.firebaseapp.com",
    projectId: "next-game-firebase",
    storageBucket: "next-game-firebase.appspot.com",
    messagingSenderId: "374136098069",
    appId: "1:374136098069:web:66136abd9f47ea84b2ad1c"
  });

  auth = getAuth(this.app);
  firestore = getFirestore(this.app);
}
