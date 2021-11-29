import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAreaInvestigacionComponent } from './eliminar-area-investigacion.component';

describe('EliminarAreaInvestigacionComponent', () => {
  let component: EliminarAreaInvestigacionComponent;
  let fixture: ComponentFixture<EliminarAreaInvestigacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarAreaInvestigacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarAreaInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
