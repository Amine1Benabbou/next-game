import { Component } from '@angular/core';
import { FixedModule } from '../../Fixed_module';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [FixedModule],
})
export class FooterComponent {
  public fixedPathTranslate: string = 'NEXT_GAME.FOOTER.';

  public navigation: any = {
    main: [
      { name: this.fixedPathTranslate + 'COLUMN_2.ITEMS.ITEM_1', href: '/' },
      {
        name: this.fixedPathTranslate + 'COLUMN_2.ITEMS.ITEM_2',
        href: '/services',
      },
      {
        name: this.fixedPathTranslate + 'COLUMN_2.ITEMS.ITEM_3',
        href: '/ressources',
      },
      {
        name: this.fixedPathTranslate + 'COLUMN_2.ITEMS.ITEM_4',
        href: '/blog',
      },
      {
        name: this.fixedPathTranslate + 'COLUMN_2.ITEMS.ITEM_5',
        href: '/a-propos',
      },
      {
        name: this.fixedPathTranslate + 'COLUMN_2.ITEMS.ITEM_6',
        href: '/contact',
      },
    ],
    legal: [
      {
        name: this.fixedPathTranslate + 'COLUMN_3.ITEMS.ITEM_1',
        href: '/mentions-legales',
      },
      {
        name: this.fixedPathTranslate + 'COLUMN_3.ITEMS.ITEM_2',
        href: '/confidentialite',
      },
      { name: this.fixedPathTranslate + 'COLUMN_3.ITEMS.ITEM_3', href: '/cgv' },
      {
        name: this.fixedPathTranslate + 'COLUMN_3.ITEMS.ITEM_4',
        href: '/cookies',
      },
    ],
    contact: [
      {
        name: 'contact@next_game.com',
        href: 'contact@next_game.com',
        icon: 'e-mail',
      },
      {
        name: '+(212) 695-9859',
        href: 'tel:+(212) 695-9859',
        icon: 'tele',
      },
      {
        name: 'Rabat',
        href: 'Rabat',
        icon: 'localisation',
      },
    ],

    socielMedia: [
      {
        name: 'Facebook',
        href: '',
        icon: 'fb',
      },
      {
        name: 'Instagram',
        href: '',
        icon: 'inst',
      },
      {
        name: 'Linkeden',
        href: '',
        icon: 'in',
      },
    ],
  };

  currentYear: number = new Date().getFullYear();
}
