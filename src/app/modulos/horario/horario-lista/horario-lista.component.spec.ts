import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioListaComponent } from './horario-lista.component';

describe('HorarioListaComponent', () => {
  let component: HorarioListaComponent;
  let fixture: ComponentFixture<HorarioListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
