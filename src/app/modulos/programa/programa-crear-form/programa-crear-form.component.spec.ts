import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaCrearFormComponent } from './programa-crear-form.component';

describe('ProgramaCrearFormComponent', () => {
  let component: ProgramaCrearFormComponent;
  let fixture: ComponentFixture<ProgramaCrearFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramaCrearFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramaCrearFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
