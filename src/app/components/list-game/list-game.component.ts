import { Component, Input, OnInit } from '@angular/core';
import { ApiGameService } from '../../services/api-game.service';
import { FixedModule } from '../../Fixed_module';
import { ListeSaveService } from '../../services/liste-save.service';

@Component({
  selector: 'app-list-game',
  imports: [FixedModule],
  templateUrl: './list-game.component.html',
  styleUrl: './list-game.component.scss',
})
export class ListGameComponent implements OnInit {
  public fixedPathTranslate: string = 'NEXT_GAME.LIST_SAVE.';
  constructor(
    private apiGameService: ApiGameService,
    public listeSave: ListeSaveService
  ) {}

  public games: any[] = [];
  public loading: boolean = false;
  public page: number = 1;
  public search: string = '';

  ngOnInit(): void {
    this.loading = true;
    this.apiGameService.getGames().subscribe((res) => {
      this.loading = false;
      this.games = res.results;
    });
  }

  public scrollToWithOffset(offset: number = -80): void {
    const element = document.getElementById('list-game-id');

    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY + offset;

      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  }

  public getPreviousGames(): void {
    this.scrollToWithOffset();
    this.page--;
    this.loading = true;
    this.games = [];

    if (this.page <= 0) {
      this.page = 1;
      this.apiGameService.getGames().subscribe((res) => {
        this.loading = false;
        this.games = res.results;
      });
    }

    this.apiGameService.getGamesByPage(this.page).subscribe((res) => {
      this.loading = false;
      this.games = res.results;
    });
  }

  public getNextGames(): void {
    this.scrollToWithOffset();
    this.page++;
    this.loading = true;
    this.games = [];
    this.apiGameService.getGamesByPage(this.page + 1).subscribe((res) => {
      this.loading = false;
      this.games = res.results;
    });
  }

  public getGamesBySearch(search: string): void {
    this.loading = true;
    this.games = [];
    this.apiGameService.getGamesBySearch(search).subscribe((res) => {
      this.loading = false;
      this.games = res.results;
    });

    if (search.length === 0) {
      this.apiGameService.getGames().subscribe((res) => {
        this.loading = false;
        this.games = res.results;
      });
    }
  }
}
