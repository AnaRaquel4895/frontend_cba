import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoListaInscritosComponent } from './grupo-lista-inscritos.component';

describe('GrupoListaInscritosComponent', () => {
  let component: GrupoListaInscritosComponent;
  let fixture: ComponentFixture<GrupoListaInscritosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoListaInscritosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoListaInscritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
