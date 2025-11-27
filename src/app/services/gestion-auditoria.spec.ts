import { TestBed } from '@angular/core/testing';

import { GestionAuditoria } from './gestion-auditoria';

describe('GestionAuditoria', () => {
  let service: GestionAuditoria;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionAuditoria);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
