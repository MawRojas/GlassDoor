import { TestBed, inject } from '@angular/core/testing';

import { BillingInformationService } from './billing-information.service';

describe('BillingInformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillingInformationService]
    });
  });

  it('should be created', inject([BillingInformationService], (service: BillingInformationService) => {
    expect(service).toBeTruthy();
  }));
});
