import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarModalidadComponent } from './listar-modalidad.component';

describe('ListarModalidadComponent', () => {
  let component: ListarModalidadComponent;
  let fixture: ComponentFixture<ListarModalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarModalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarModalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
