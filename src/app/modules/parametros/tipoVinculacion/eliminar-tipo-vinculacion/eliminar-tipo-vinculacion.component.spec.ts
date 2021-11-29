import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTipoVinculacionComponent } from './eliminar-tipo-vinculacion.component';

describe('EliminarTipoVinculacionComponent', () => {
  let component: EliminarTipoVinculacionComponent;
  let fixture: ComponentFixture<EliminarTipoVinculacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarTipoVinculacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarTipoVinculacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
