import { Component } from '@angular/core';
import { FixedModule } from '../../Fixed_module';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [FixedModule],
})
export class FooterComponent {
  public readonly fixedPathTranslate = 'NEXT_GAME.FOOTER.';

  private readonly MAIN_LINKS = [
    { key: 'COLUMN_2.ITEMS.ITEM_1', href: '/' },
    { key: 'COLUMN_2.ITEMS.ITEM_2', href: '/services' },
    { key: 'COLUMN_2.ITEMS.ITEM_3', href: '/ressources' },
    { key: 'COLUMN_2.ITEMS.ITEM_4', href: '/blog' },
    { key: 'COLUMN_2.ITEMS.ITEM_5', href: '/a-propos' },
    { key: 'COLUMN_2.ITEMS.ITEM_6', href: '/contact' },
  ];

  private readonly LEGAL_LINKS = [
    { key: 'COLUMN_3.ITEMS.ITEM_1', href: '/mentions-legales' },
    { key: 'COLUMN_3.ITEMS.ITEM_2', href: '/confidentialite' },
    { key: 'COLUMN_3.ITEMS.ITEM_3', href: '/cgv' },
    { key: 'COLUMN_3.ITEMS.ITEM_4', href: '/cookies' },
  ];

  private readonly CONTACT_LINKS = [
    { name: 'contact@next_game.com', href: 'contact@next_game.com', icon: 'e-mail' },
    { name: '+(212) 695-9859', href: 'tel:+(212) 695-9859', icon: 'tele' },
    { name: 'Rabat', href: 'Rabat', icon: 'localisation' },
  ];

  private readonly SOCIAL_LINKS = [
    { name: 'Facebook', href: '', icon: 'fb' },
    { name: 'Instagram', href: '', icon: 'inst' },
    { name: 'Linkeden', href: '', icon: 'in' },
  ];

  public readonly nav = {
    main: this.MAIN_LINKS.map((item) => ({
      name: this.fixedPathTranslate + item.key,
      href: item.href,
    })),

    legal: this.LEGAL_LINKS.map((item) => ({
      name: this.fixedPathTranslate + item.key,
      href: item.href,
    })),

    contact: [...this.CONTACT_LINKS],
    socielMedia: [...this.SOCIAL_LINKS],
  };

  public readonly currentYear = new Date().getFullYear();
}
