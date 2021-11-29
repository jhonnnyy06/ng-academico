import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarJuradoComponent } from './listar-jurado.component';

describe('ListarJuradoComponent', () => {
  let component: ListarJuradoComponent;
  let fixture: ComponentFixture<ListarJuradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarJuradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarJuradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
