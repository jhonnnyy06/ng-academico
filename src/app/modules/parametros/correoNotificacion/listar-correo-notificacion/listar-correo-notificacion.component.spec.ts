import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCorreoNotificacionComponent } from './listar-correo-notificacion.component';

describe('ListarCorreoNotificacionComponent', () => {
  let component: ListarCorreoNotificacionComponent;
  let fixture: ComponentFixture<ListarCorreoNotificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCorreoNotificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCorreoNotificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
