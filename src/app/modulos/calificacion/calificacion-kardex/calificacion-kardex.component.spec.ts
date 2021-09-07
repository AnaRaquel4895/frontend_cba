import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionKardexComponent } from './calificacion-kardex.component';

describe('CalificacionKardexComponent', () => {
  let component: CalificacionKardexComponent;
  let fixture: ComponentFixture<CalificacionKardexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificacionKardexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionKardexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
