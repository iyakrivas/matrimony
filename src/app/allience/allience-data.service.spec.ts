import { TestBed } from '@angular/core/testing';

import { AllienceDataService } from './allience-data.service';

describe('AllienceDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllienceDataService = TestBed.get(AllienceDataService);
    expect(service).toBeTruthy();
  });
});
