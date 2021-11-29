import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarJuradoComponent } from './eliminar-jurado.component';

describe('EliminarJuradoComponent', () => {
  let component: EliminarJuradoComponent;
  let fixture: ComponentFixture<EliminarJuradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarJuradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarJuradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
