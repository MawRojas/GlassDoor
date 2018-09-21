import { TestBed, inject } from '@angular/core/testing';

import { SJobsService } from './s-jobs.service';

describe('SJobsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SJobsService]
    });
  });

  it('should be created', inject([SJobsService], (service: SJobsService) => {
    expect(service).toBeTruthy();
  }));
});
