import { Component } from '@angular/core';
import { ApiGameService } from '../../services/api-game.service';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../../models/game.model';
import { FixedModule } from '../../Fixed_module';
import { ListeSaveService } from '../../services/liste-save.service';

@Component({
  selector: 'app-game-details',
  imports: [FixedModule],
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.scss',
})
export class GameDetailsComponent {
  public loading: boolean = false;
  constructor(
    private apiGameService: ApiGameService,
    private route: ActivatedRoute,
    public listeSave: ListeSaveService
  ) {}

  public game: any;
  public id: number = 0;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loading = true;
    this.apiGameService.getGameById(this.id).subscribe(
      (res: Game) => {
        this.game = res;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    );
  }
}
