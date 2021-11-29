import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTiposComiteComponent } from './eliminar-tipos-comite.component';

describe('EliminarTiposComiteComponent', () => {
  let component: EliminarTiposComiteComponent;
  let fixture: ComponentFixture<EliminarTiposComiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarTiposComiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarTiposComiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
