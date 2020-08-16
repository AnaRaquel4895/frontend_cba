import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelCrearFormComponent } from './nivel-crear-form.component';

describe('NivelCrearFormComponent', () => {
  let component: NivelCrearFormComponent;
  let fixture: ComponentFixture<NivelCrearFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NivelCrearFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelCrearFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
