import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAreaInvestigacionComponent } from './crear-area-investigacion.component';

describe('CrearAreaInvestigacionComponent', () => {
  let component: CrearAreaInvestigacionComponent;
  let fixture: ComponentFixture<CrearAreaInvestigacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAreaInvestigacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAreaInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
