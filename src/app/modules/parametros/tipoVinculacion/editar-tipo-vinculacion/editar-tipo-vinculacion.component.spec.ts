import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipoVinculacionComponent } from './editar-tipo-vinculacion.component';

describe('EditarTipoVinculacionComponent', () => {
  let component: EditarTipoVinculacionComponent;
  let fixture: ComponentFixture<EditarTipoVinculacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTipoVinculacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTipoVinculacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
