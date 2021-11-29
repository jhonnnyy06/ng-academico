import { TestBed } from '@angular/core/testing';

import { AreaInvestigacionService } from './area-investigacion.service';

describe('AreaInvestigacionService', () => {
  let service: AreaInvestigacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaInvestigacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
