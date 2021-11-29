import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearJuradoComponent } from './crear-jurado.component';

describe('CrearJuradoComponent', () => {
  let component: CrearJuradoComponent;
  let fixture: ComponentFixture<CrearJuradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearJuradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearJuradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
