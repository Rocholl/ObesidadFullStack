import { TestBed } from '@angular/core/testing';

import { HealthsService } from './healths.service';

describe('HealthsService', () => {
  let service: HealthsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
