import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProponenteComponent } from './listar-proponente.component';

describe('ListarProponenteComponent', () => {
  let component: ListarProponenteComponent;
  let fixture: ComponentFixture<ListarProponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarProponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
