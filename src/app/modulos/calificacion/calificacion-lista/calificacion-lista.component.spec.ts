import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionListaComponent } from './calificacion-lista.component';

describe('CalificacionListaComponent', () => {
  let component: CalificacionListaComponent;
  let fixture: ComponentFixture<CalificacionListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificacionListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
