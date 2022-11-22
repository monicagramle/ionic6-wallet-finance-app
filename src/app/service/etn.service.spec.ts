import { TestBed } from '@angular/core/testing';

import { EtnService } from './etn.service';

describe('EtnService', () => {
  let service: EtnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
