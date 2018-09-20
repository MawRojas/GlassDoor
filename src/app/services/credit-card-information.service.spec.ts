import { TestBed, inject } from '@angular/core/testing';

import { CreditCardInformationService } from './credit-card-information.service';

describe('CreditCardInformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreditCardInformationService]
    });
  });

  it('should be created', inject([CreditCardInformationService], (service: CreditCardInformationService) => {
    expect(service).toBeTruthy();
  }));
});
