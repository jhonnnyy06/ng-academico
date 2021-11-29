import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCorreoNotificacionComponent } from './editar-correo-notificacion.component';

describe('EditarCorreoNotificacionComponent', () => {
  let component: EditarCorreoNotificacionComponent;
  let fixture: ComponentFixture<EditarCorreoNotificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCorreoNotificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCorreoNotificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
