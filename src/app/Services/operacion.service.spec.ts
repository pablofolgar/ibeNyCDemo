import { TestBed } from '@angular/core/testing';

import { OperacionService } from './operacion.service';

describe('OperacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OperacionService = TestBed.get(OperacionService);
    expect(service).toBeTruthy();
  });
});
