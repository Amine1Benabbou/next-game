import { TestBed } from '@angular/core/testing';

import { ApiGameService } from './api-game.service';

describe('ApiGameService', () => {
  let service: ApiGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
