import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HeaderService } from '../../services/header.service';
import { FixedModule } from '../../Fixed_module';
import { CommonFunctionsService } from '../../services/common-functions.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [...FixedModule],
})
export class HeaderComponent implements OnInit {
  public brandName: string = 'P';
  public fixedPathTranslate: string = 'NEXT_GAME.HEADER.';

  public listMenu: any[] = [
    { name: 'ITEM_1', link: 'home' },
    { name: 'ITEM_3', link: 'help' },
    { name: 'ITEM_4', link: 'faq' },
  ];

  public listButton: any[] = ['auth', 'create-account'];

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
