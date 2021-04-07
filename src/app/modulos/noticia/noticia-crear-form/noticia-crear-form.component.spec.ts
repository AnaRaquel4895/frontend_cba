import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaCrearFormComponent } from './noticia-crear-form.component';

describe('NoticiaCrearFormComponent', () => {
  let component: NoticiaCrearFormComponent;
  let fixture: ComponentFixture<NoticiaCrearFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiaCrearFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaCrearFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
