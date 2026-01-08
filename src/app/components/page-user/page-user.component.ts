import { Component } from '@angular/core';
import { FixedModule } from '../../Fixed_module';
import { FooterComponent } from '../footer/footer.component';
import { Header2Component } from '../header-2/header-2.component';

@Component({
  selector: 'app-page-user',
  imports: [FixedModule,FooterComponent,Header2Component],
  templateUrl: './page-user.component.html',
  styleUrl: './page-user.component.scss'
})
export class PageUserComponent {

}
