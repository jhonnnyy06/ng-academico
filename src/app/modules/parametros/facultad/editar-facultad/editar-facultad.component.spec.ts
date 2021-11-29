import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFacultadComponent } from './editar-facultad.component';

describe('EditarFacultadComponent', () => {
  let component: EditarFacultadComponent;
  let fixture: ComponentFixture<EditarFacultadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarFacultadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarFacultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
