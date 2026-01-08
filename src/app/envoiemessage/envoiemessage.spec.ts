import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Envoiemessage } from './envoiemessage';

describe('Envoiemessage', () => {
  let component: Envoiemessage;
  let fixture: ComponentFixture<Envoiemessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Envoiemessage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Envoiemessage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
