import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipoVinculacionComponent } from './crear-tipo-vinculacion.component';

describe('CrearTipoVinculacionComponent', () => {
  let component: CrearTipoVinculacionComponent;
  let fixture: ComponentFixture<CrearTipoVinculacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTipoVinculacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTipoVinculacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
