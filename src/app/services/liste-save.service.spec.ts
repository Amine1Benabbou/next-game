import { TestBed } from '@angular/core/testing';

import { ListeSaveService } from './liste-save.service';

describe('ListeSaveService', () => {
  let service: ListeSaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeSaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
