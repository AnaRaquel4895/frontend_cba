import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionListaComponent } from './gestion-lista.component';

describe('GestionListaComponent', () => {
  let component: GestionListaComponent;
  let fixture: ComponentFixture<GestionListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
