import { TestBed } from '@angular/core/testing';

import { ConsultaAvisoService } from './consulta-aviso.service';

describe('ConsultaAvisoService', () => {
  let service: ConsultaAvisoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaAvisoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
