import { TestBed } from '@angular/core/testing';

import { RoomsService } from './room.service';

describe('RoomsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoomsService = TestBed.get(RoomsService);
    expect(service).toBeTruthy();
  });
});
