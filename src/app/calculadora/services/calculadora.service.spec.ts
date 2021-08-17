import { TestBed } from '@angular/core/testing';

import { calculatorService } from './calculadora.service';

describe('calculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: calculatorService = TestBed.get(calculatorService);
    expect(service).toBeTruthy();
  });
});
