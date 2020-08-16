import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCrearFormComponent } from './gestion-crear-form.component';

describe('GestionCrearFormComponent', () => {
  let component: GestionCrearFormComponent;
  let fixture: ComponentFixture<GestionCrearFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionCrearFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCrearFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
