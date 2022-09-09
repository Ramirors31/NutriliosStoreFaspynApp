import { TestBed } from '@angular/core/testing';

import { AuxFnsService } from './aux-fns.service';

describe('AuxFnsService', () => {
  let service: AuxFnsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuxFnsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
