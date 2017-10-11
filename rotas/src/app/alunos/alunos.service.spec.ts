import { TestBed, inject } from '@angular/core/testing';

import { Alunos.ServiceService } from './alunos.service.service';

describe('Alunos.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Alunos.ServiceService]
    });
  });

  it('should be created', inject([Alunos.ServiceService], (service: Alunos.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
