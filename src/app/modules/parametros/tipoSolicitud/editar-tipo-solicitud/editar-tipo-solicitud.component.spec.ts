import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipoSolicitudComponent } from './editar-tipo-solicitud.component';

describe('EditarTipoSolicitudComponent', () => {
  let component: EditarTipoSolicitudComponent;
  let fixture: ComponentFixture<EditarTipoSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTipoSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTipoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
