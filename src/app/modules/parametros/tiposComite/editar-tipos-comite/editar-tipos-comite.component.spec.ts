import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTiposComiteComponent } from './editar-tipos-comite.component';

describe('EditarTiposComiteComponent', () => {
  let component: EditarTiposComiteComponent;
  let fixture: ComponentFixture<EditarTiposComiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTiposComiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTiposComiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
