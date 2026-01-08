import { Component, OnInit } from '@angular/core';
import { FixedModule } from '../../Fixed_module';
import { ListeSaveService } from '../../services/liste-save.service';
import { ApiGameService } from '../../services/api-game.service';
import { SaveGame } from '../../models/save-dame.model';

@Component({
  selector: 'app-liste-save',
  imports: [FixedModule],
  templateUrl: './liste-save.component.html',
  styleUrl: './liste-save.component.scss',
})
export class ListeSaveComponent implements OnInit {
  public loading: boolean = false;
  public fixedPathTranslate: string = 'NEXT_GAME.LISTE_SAVE.';
  public listeSaveGames: SaveGame[] = [];

  constructor(
    public listeSave: ListeSaveService,
    public apiGameService: ApiGameService
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    
    // Subscribe to saved games observable
    this.listeSave.getListeSaveObservable().subscribe((games) => {
      this.listeSaveGames = games;
      
      // Fetch game details for each saved game
      for (const game of games) {
        if (game.gameInfo) {
          continue;
        }
        this.apiGameService.getGameById(game.id).subscribe((res) => {
          game.gameInfo = res;
        });
      }
    });
  }
}
