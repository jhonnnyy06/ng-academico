import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoVinculacionComponent } from './listar-tipo-vinculacion.component';

describe('ListarTipoVinculacionComponent', () => {
  let component: ListarTipoVinculacionComponent;
  let fixture: ComponentFixture<ListarTipoVinculacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTipoVinculacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTipoVinculacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
