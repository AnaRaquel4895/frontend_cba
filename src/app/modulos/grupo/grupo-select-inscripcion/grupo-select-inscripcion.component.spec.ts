import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoSelectInscripcionComponent } from './grupo-select-inscripcion.component';

describe('GrupoSelectInscripcionComponent', () => {
  let component: GrupoSelectInscripcionComponent;
  let fixture: ComponentFixture<GrupoSelectInscripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoSelectInscripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoSelectInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
