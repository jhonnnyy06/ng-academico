import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProponenteComponent } from './crear-proponente.component';

describe('CrearProponenteComponent', () => {
  let component: CrearProponenteComponent;
  let fixture: ComponentFixture<CrearProponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearProponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearProponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
