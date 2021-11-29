import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipoSolicitudComponent } from './crear-tipo-solicitud.component';

describe('CrearTipoSolicitudComponent', () => {
  let component: CrearTipoSolicitudComponent;
  let fixture: ComponentFixture<CrearTipoSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTipoSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTipoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
