import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProponenteComponent } from './editar-proponente.component';

describe('EditarProponenteComponent', () => {
  let component: EditarProponenteComponent;
  let fixture: ComponentFixture<EditarProponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarProponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarProponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
