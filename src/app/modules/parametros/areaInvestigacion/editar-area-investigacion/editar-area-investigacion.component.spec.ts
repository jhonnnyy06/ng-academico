import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAreaInvestigacionComponent } from './editar-area-investigacion.component';

describe('EditarAreaInvestigacionComponent', () => {
  let component: EditarAreaInvestigacionComponent;
  let fixture: ComponentFixture<EditarAreaInvestigacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAreaInvestigacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAreaInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
