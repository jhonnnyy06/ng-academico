import { TestBed } from '@angular/core/testing';

import { ProponenteService } from './proponente.service';

describe('ProponenteService', () => {
  let service: ProponenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProponenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
