import { TestBed } from '@angular/core/testing';

import { BottomService } from './bottom.service';

describe('BottomService', () => {
  let service: BottomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BottomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
