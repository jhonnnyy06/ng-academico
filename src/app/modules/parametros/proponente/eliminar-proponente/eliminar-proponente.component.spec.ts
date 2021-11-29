import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProponenteComponent } from './eliminar-proponente.component';

describe('EliminarProponenteComponent', () => {
  let component: EliminarProponenteComponent;
  let fixture: ComponentFixture<EliminarProponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarProponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarProponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
