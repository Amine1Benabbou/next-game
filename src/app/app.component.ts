import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FixedModule } from './Fixed_module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ...FixedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'next-game';
}
