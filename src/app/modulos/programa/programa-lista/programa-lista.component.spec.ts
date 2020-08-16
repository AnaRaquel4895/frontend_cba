import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaListaComponent } from './programa-lista.component';

describe('ProgramaListaComponent', () => {
  let component: ProgramaListaComponent;
  let fixture: ComponentFixture<ProgramaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
