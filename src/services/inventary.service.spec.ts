import { TestBed } from '@angular/core/testing';

import { InventaryService } from './inventary.service';

describe('InventaryService', () => {
  let service: InventaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
