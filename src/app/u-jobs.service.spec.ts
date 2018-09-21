import { TestBed, inject } from '@angular/core/testing';

import { UJobsService } from './u-jobs.service';

describe('UJobsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UJobsService]
    });
  });

  it('should be created', inject([UJobsService], (service: UJobsService) => {
    expect(service).toBeTruthy();
  }));
});
