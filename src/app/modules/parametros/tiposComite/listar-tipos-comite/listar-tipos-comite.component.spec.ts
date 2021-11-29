import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTiposComiteComponent } from './listar-tipos-comite.component';

describe('ListarTiposComiteComponent', () => {
  let component: ListarTiposComiteComponent;
  let fixture: ComponentFixture<ListarTiposComiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTiposComiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTiposComiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
