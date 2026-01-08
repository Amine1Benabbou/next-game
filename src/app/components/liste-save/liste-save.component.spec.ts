import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSaveComponent } from './liste-save.component';

describe('ListeSaveComponent', () => {
  let component: ListeSaveComponent;
  let fixture: ComponentFixture<ListeSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeSaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
