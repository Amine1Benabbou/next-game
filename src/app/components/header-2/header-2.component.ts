import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HeaderService } from '../../services/header.service';
import { CommonFunctionsService } from '../../services/common-functions.service';
import { FixedModule } from '../../Fixed_module';

@Component({
  selector: 'app-header-2',
  imports: [FixedModule],
  templateUrl: './header-2.component.html',
  styleUrl: './header-2.component.scss'
})
export class Header2Component {
  public brandName: string = 'P';
  public fixedPathTranslate: string = 'NEXT_GAME.HEADER_2.';

  public listMenu: any[] = [
    { name: 'ITEM_1', link: 'home' },
    { name: 'ITEM_3', link: 'help' },
    { name: 'ITEM_4', link: 'faq' },
  ];

  public listButton: any[] = ['list-save', '/main-page/auth'];

  public langagueIcones: string[] = ['fr', 'en'];
  public traductionVisibility: boolean = false;

  constructor(
    private translate: TranslateService,
    public headerService: HeaderService,
    public commonFunctionService: CommonFunctionsService
  ) {}

  ngOnInit(): void {
    this.translate.setDefaultLang('fr');
  }

  public changeLanguage(index: number) {
    let currentLangue = this.langagueIcones[index];
    this.langagueIcones[index] = this.langagueIcones[0];
    this.langagueIcones[0] = currentLangue;
    this.translate.setDefaultLang(this.langagueIcones[0]);
  }
}
