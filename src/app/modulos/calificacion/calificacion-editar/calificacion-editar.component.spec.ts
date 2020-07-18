import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionEditarComponent } from './calificacion-editar.component';

describe('CalificacionEditarComponent', () => {
  let component: CalificacionEditarComponent;
  let fixture: ComponentFixture<CalificacionEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificacionEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
