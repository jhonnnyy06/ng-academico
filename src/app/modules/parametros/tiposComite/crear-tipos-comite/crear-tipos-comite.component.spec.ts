import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTiposComiteComponent } from './crear-tipos-comite.component';

describe('CrearTiposComiteComponent', () => {
  let component: CrearTiposComiteComponent;
  let fixture: ComponentFixture<CrearTiposComiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTiposComiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTiposComiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
