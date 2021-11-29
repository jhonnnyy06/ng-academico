import { TestBed } from '@angular/core/testing';

import { TiposComiteService } from './tipos-comite.service';

describe('TiposComiteService', () => {
  let service: TiposComiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposComiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
