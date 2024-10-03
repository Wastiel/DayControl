/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { AtividadeService } from './atividade.service';

describe('Service: AtividadeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtividadeService]
    });
  });

  it('should ...', inject([AtividadeService], (service: AtividadeService) => {
    expect(service).toBeTruthy();
  }));
});
