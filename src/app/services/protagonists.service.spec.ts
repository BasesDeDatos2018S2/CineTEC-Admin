import { TestBed } from '@angular/core/testing';

import { ProtagonistsService } from './protagonists.service';

describe('ProtagonistsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProtagonistsService = TestBed.get(ProtagonistsService);
    expect(service).toBeTruthy();
  });
});
