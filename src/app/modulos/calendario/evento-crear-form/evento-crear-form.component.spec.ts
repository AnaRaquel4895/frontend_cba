import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoCrearFormComponent } from './evento-crear-form.component';

describe('EventoCrearFormComponent', () => {
  let component: EventoCrearFormComponent;
  let fixture: ComponentFixture<EventoCrearFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoCrearFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoCrearFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
