import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearModalidadComponent } from './crear-modalidad.component';

describe('CrearModalidadComponent', () => {
  let component: CrearModalidadComponent;
  let fixture: ComponentFixture<CrearModalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearModalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearModalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
