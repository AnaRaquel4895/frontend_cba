import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoCrearFormComponent } from './curso-crear-form.component';

describe('CursoCrearFormComponent', () => {
  let component: CursoCrearFormComponent;
  let fixture: ComponentFixture<CursoCrearFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoCrearFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoCrearFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
