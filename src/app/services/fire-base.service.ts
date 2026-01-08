import { Injectable } from '@angular/core';
import { initializeApp, FirebaseApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword as firebaseCreateUser,
  signInWithEmailAndPassword as firebaseSignIn,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  Auth,
  UserCredential
} from 'firebase/auth';
import {
  getFirestore,
  Firestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  DocumentData
} from 'firebase/firestore';
import { getFunctions, httpsCallable, Functions } from 'firebase/functions';

@Injectable({
  providedIn: 'root',
})
export class FireBaseService {
  // Your web app's Firebase configuration
  private firebaseConfig = {
    apiKey: 'AIzaSyBpEbTvoYBRAyoRpof8kij0HzKMW46hG8o',
    authDomain: 'nextgame-f4e17.firebaseapp.com',
    projectId: 'nextgame-f4e17',
    storageBucket: 'nextgame-f4e17.firebasestorage.app',
    messagingSenderId: '111188137568',
    appId: '1:111188137568:web:4d3308a20cf73a71611505'
  };

  private app: FirebaseApp;
  private auth: Auth;
  private firestore: Firestore;
  private functions: Functions;

  constructor() {
    this.app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(this.app);
    this.firestore = getFirestore(this.app);
    this.functions = getFunctions(this.app);
    console.log('Firebase initialized successfully');
  }

  // ===============> add email to tombola
  addEmailToTombola(email: string): void {
    console.log(email);
  }

  // ===============> sign in with email and password
  signInWithEmailAndPassword(email: string, password: string): Promise<UserCredential> {
    return firebaseSignIn(this.auth, email, password);
  }

  // ===============> create user with email and password
  createUserWithEmailAndPassword(email: string, password: string): Promise<UserCredential> {
    return firebaseCreateUser(this.auth, email, password);
  }

  // ===============> sign out
  signOut(): Promise<void> {
    return firebaseSignOut(this.auth);
  }

  // ===============> get current user
  getCurrentUser() {
    return this.auth.currentUser;
  }

  // ===============> listen to auth state changes
  onAuthStateChanged(callback: (user: any) => void): void {
    onAuthStateChanged(this.auth, callback);
  }

  // ===============> Firestore - Save game to user's collection
  async saveGameForUser(gameId: number): Promise<void> {
    const user = this.auth.currentUser;
    if (!user) {
      console.error('No user logged in');
      throw new Error('No user logged in');
    }

    const userDocRef = doc(this.firestore, 'users', user.uid);
    
    try {
      // First, try to update the document
      await updateDoc(userDocRef, {
        savedGames: arrayUnion(gameId)
      });
    } catch (error: any) {
      // If document doesn't exist, create it
      if (error.code === 'not-found') {
        await setDoc(userDocRef, {
          email: user.email,
          savedGames: [gameId],
          createdAt: new Date(),
          uid: user.uid
        });
      } else {
        console.error('Error saving game:', error);
        throw error;
      }
    }

    console.log(`Game ${gameId} saved for user ${user.uid}`);
  }

  // ===============> Firestore - Remove game from user's collection
  async removeGameForUser(gameId: number): Promise<void> {
    const user = this.auth.currentUser;
    if (!user) {
      throw new Error('No user logged in');
    }

    const userDocRef = doc(this.firestore, 'users', user.uid);
    
    await updateDoc(userDocRef, {
      savedGames: arrayRemove(gameId)
    });

    console.log(`Game ${gameId} removed for user ${user.uid}`);
  }

  // ===============> Firestore - Get saved games for user
  async getSavedGamesForUser(): Promise<number[]> {
    const user = this.auth.currentUser;
    if (!user) {
      throw new Error('No user logged in');
    }

    const userDocRef = doc(this.firestore, 'users', user.uid);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      return docSnap.data()['savedGames'] || [];
    }
    return [];
  }

  // ===============> Cloud Function - send contact confirmation email
  public async sendContactConfirmation(email: string, name?: string, message?: string): Promise<any> {
    const callable = httpsCallable(this.functions, 'sendContactConfirmation');
    try {
      const res = await callable({ email, name, message });
      return res.data;
    } catch (err) {
      console.error('Error calling sendContactConfirmation:', err);
      throw err;
    }
  }
}