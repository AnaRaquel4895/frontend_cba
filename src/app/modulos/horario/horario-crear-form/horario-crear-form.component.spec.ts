import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioCrearFormComponent } from './horario-crear-form.component';

describe('HorarioCrearFormComponent', () => {
  let component: HorarioCrearFormComponent;
  let fixture: ComponentFixture<HorarioCrearFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioCrearFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioCrearFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
