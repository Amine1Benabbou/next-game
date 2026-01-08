import { Component } from '@angular/core';
import { FixedModule } from '../../Fixed_module';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main-page',
  imports: [FixedModule, HeaderComponent, FooterComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
