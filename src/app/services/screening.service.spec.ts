import { TestBed } from '@angular/core/testing';

import { ScreeningsService } from './screening.service';

describe('ScreeningService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScreeningsService = TestBed.get(ScreeningsService);
    expect(service).toBeTruthy();
  });
});
