import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section1MainPageComponent } from './section-1-main-page.component';

describe('Section1MainPageComponent', () => {
  let component: Section1MainPageComponent;
  let fixture: ComponentFixture<Section1MainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section1MainPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section1MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
