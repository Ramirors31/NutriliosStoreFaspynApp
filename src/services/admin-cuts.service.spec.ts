import { TestBed } from '@angular/core/testing';

import { AdminCutsService } from './admin-cuts.service';

describe('AdminCutsService', () => {
  let service: AdminCutsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminCutsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
