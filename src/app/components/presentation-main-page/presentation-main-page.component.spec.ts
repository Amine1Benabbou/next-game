import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationMainPageComponent } from './presentation-main-page.component';

describe('PresentationMainPageComponent', () => {
  let component: PresentationMainPageComponent;
  let fixture: ComponentFixture<PresentationMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationMainPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
