import { TestBed } from '@angular/core/testing';

import { ColorFactoryService } from './color-factory.service';

describe('ColorFactoryService', () => {
  let service: ColorFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
