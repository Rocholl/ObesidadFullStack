import { TestBed } from '@angular/core/testing';

import { ObjectSenderService } from './object-sender.service';

describe('ObjectSenderService', () => {
  let service: ObjectSenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectSenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
