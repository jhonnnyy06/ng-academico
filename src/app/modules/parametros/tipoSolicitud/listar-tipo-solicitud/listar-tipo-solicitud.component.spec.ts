import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoSolicitudComponent } from './listar-tipo-solicitud.component';

describe('ListarTipoSolicitudComponent', () => {
  let component: ListarTipoSolicitudComponent;
  let fixture: ComponentFixture<ListarTipoSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTipoSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTipoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
