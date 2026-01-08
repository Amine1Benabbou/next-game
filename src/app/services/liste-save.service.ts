import { Injectable } from '@angular/core';
import { SaveGame } from '../models/save-dame.model';
import { FireBaseService } from './fire-base.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListeSaveService {
  private listeSaveSubject = new BehaviorSubject<SaveGame[]>([]);
  public listeSaveId$ = this.listeSaveSubject.asObservable();
  private isLoadingSubject = new BehaviorSubject<boolean>(true);
  public isLoading$ = this.isLoadingSubject.asObservable();
  private currentUserId: string | null = null;

  constructor(private firebaseService: FireBaseService) {
    // Listen to auth state changes and reload games when user changes
    this.firebaseService.onAuthStateChanged((user) => {
      if (user) {
        this.currentUserId = user.uid;
        console.log('User logged in:', user.uid);
        this.loadSavedGamesFromFirestore();
      } else {
        this.currentUserId = null;
        console.log('User logged out');
        this.listeSaveSubject.next([]);
        this.isLoadingSubject.next(false);
      }
    });
  }

  // ===============> Load saved games from Firestore
  private async loadSavedGamesFromFirestore(): Promise<void> {
    this.isLoadingSubject.next(true);
    try {
      const savedGameIds = await this.firebaseService.getSavedGamesForUser();
      this.listeSaveSubject.next(
        savedGameIds.map(id => ({
          id: id,
          gameInfo: null
        }))
      );
      console.log('Saved games loaded from Firestore for user:', this.currentUserId, savedGameIds);
    } catch (error) {
      console.log('No user logged in or error loading games:', error);
      // Initialize with empty array if not logged in
      this.listeSaveSubject.next([]);
    } finally {
      this.isLoadingSubject.next(false);
    }
  }

  // ===============> Get current saved games list
  public getListeSaveSync(): SaveGame[] {
    return this.listeSaveSubject.getValue();
  }

  public getStatusId(id_game: number): boolean {
    return this.getListeSaveSync().some((game) => game.id === id_game);
  }

  public async addElementToListeSaveById(id_game: number): Promise<void> {
    if (!this.currentUserId) {
      alert('Please log in to save games');
      return;
    }

    if (this.getStatusId(id_game)) {
      return;
    }

    try {
      // Save to Firestore
      await this.firebaseService.saveGameForUser(id_game);

      // Add to local observable
      const currentList = this.getListeSaveSync();
      this.listeSaveSubject.next([
        ...currentList,
        { id: id_game, gameInfo: null }
      ]);

      console.log('Game saved:', id_game, 'for user:', this.currentUserId);
    } catch (error) {
      console.error('Error saving game:', error);
      alert('Failed to save game. Please make sure you are logged in.');
    }
  }

  public async deleteElementFromListeSaveById(id_game: number): Promise<void> {
    if (!this.currentUserId) {
      alert('Please log in to remove games');
      return;
    }

    try {
      // Remove from Firestore
      await this.firebaseService.removeGameForUser(id_game);

      // Remove from local observable
      const currentList = this.getListeSaveSync();
      this.listeSaveSubject.next(
        currentList.filter((game) => game.id !== id_game)
      );

      console.log('Game removed:', id_game, 'for user:', this.currentUserId);
    } catch (error) {
      console.error('Error removing game:', error);
      alert('Failed to remove game. Please make sure you are logged in.');
    }
  }

  public getListeSave(): SaveGame[] {
    return this.getListeSaveSync();
  }

  // ===============> Refresh saved games from Firestore
  public async refreshFromFirestore(): Promise<void> {
    await this.loadSavedGamesFromFirestore();
  }

  // ===============> Get observable for reactive updates
  public getListeSaveObservable(): Observable<SaveGame[]> {
    return this.listeSaveId$;
  }
}
