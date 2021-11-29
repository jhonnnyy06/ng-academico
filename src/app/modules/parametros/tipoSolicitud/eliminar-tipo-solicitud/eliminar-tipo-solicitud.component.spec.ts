import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTipoSolicitudComponent } from './eliminar-tipo-solicitud.component';

describe('EliminarTipoSolicitudComponent', () => {
  let component: EliminarTipoSolicitudComponent;
  let fixture: ComponentFixture<EliminarTipoSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarTipoSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarTipoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
