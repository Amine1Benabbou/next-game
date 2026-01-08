import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root',
})
export class ApiGameService {
  public token = 'c544911add9a48bfa8cffa3d2b9d221e';
  public apiUrl = 'https://api.rawg.io/api/games?key=';
  constructor(private http: HttpClient) {}

  public getGames(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${this.token}`);
  }

  public getGamesByPage(page: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${this.token}&page=${page}`);
  }

  public getGamesBySearch(search: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${this.token}&search=${search}`);
  }

  public getGameById(id: number) {
    return this.http.get<Game>(`https://api.rawg.io/api/games/${id}?key=${this.token}`);
  }
}
