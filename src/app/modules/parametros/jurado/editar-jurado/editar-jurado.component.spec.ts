import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarJuradoComponent } from './editar-jurado.component';

describe('EditarJuradoComponent', () => {
  let component: EditarJuradoComponent;
  let fixture: ComponentFixture<EditarJuradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarJuradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarJuradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
