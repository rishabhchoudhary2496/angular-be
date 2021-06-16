import { TestBed } from '@angular/core/testing';

import { DebugServiceService } from './debug-service.service';

describe('DebugServiceService', () => {
  let service: DebugServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DebugServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
