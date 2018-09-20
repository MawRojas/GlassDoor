import { TestBed, inject } from '@angular/core/testing';

import { InterviewReviewService } from './interview-review.service';

describe('InterviewReviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterviewReviewService]
    });
  });

  it('should be created', inject([InterviewReviewService], (service: InterviewReviewService) => {
    expect(service).toBeTruthy();
  }));
});
