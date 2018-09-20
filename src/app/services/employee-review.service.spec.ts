import { TestBed, inject } from '@angular/core/testing';

import { EmployeeReviewService } from './employee-review.service';

describe('EmployeeReviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeReviewService]
    });
  });

  it('should be created', inject([EmployeeReviewService], (service: EmployeeReviewService) => {
    expect(service).toBeTruthy();
  }));
});
