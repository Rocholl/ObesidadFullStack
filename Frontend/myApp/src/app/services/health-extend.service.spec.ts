import { TestBed } from '@angular/core/testing';

import { HealthsExtendService } from './health-extend.service';

describe('HealthExtendService', () => {
  let service: HealthsExtendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthsExtendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
