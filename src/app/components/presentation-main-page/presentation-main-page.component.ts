import { Component } from '@angular/core';
import { Section1MainPageComponent } from "../section-1-main-page/section-1-main-page.component";
import { ListGameComponent } from "../list-game/list-game.component";

@Component({
  selector: 'app-presentation-main-page',
  imports: [Section1MainPageComponent, ListGameComponent],
  templateUrl: './presentation-main-page.component.html',
  styleUrl: './presentation-main-page.component.scss'
})
export class PresentationMainPageComponent {

}
