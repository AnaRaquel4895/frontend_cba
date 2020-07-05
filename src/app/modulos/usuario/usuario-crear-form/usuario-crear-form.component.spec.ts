import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCrearFormComponent } from './usuario-crear-form.component';

describe('UsuarioCrearFormComponent', () => {
  let component: UsuarioCrearFormComponent;
  let fixture: ComponentFixture<UsuarioCrearFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioCrearFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioCrearFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
