import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCorreoNotificacionComponent } from './eliminar-correo-notificacion.component';

describe('EliminarCorreoNotificacionComponent', () => {
  let component: EliminarCorreoNotificacionComponent;
  let fixture: ComponentFixture<EliminarCorreoNotificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarCorreoNotificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarCorreoNotificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
