import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCorreoNotificacionComponent } from './crear-correo-notificacion.component';

describe('CrearCorreoNotificacionComponent', () => {
  let component: CrearCorreoNotificacionComponent;
  let fixture: ComponentFixture<CrearCorreoNotificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCorreoNotificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCorreoNotificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
