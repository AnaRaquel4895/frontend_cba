import { TestBed } from '@angular/core/testing';

import { CalificacionInscripcionService } from './calificacion-inscripcion.service';

describe('CalificacionInscripcionService', () => {
  let service: CalificacionInscripcionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalificacionInscripcionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
