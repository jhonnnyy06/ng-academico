import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAreaInvestigacionComponent } from './listar-area-investigacion.component';

describe('ListarAreaInvestigacionComponent', () => {
  let component: ListarAreaInvestigacionComponent;
  let fixture: ComponentFixture<ListarAreaInvestigacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAreaInvestigacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAreaInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
