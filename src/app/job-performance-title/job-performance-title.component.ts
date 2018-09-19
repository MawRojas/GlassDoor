import { Component, OnInit } from '@angular/core';
import { SJobsService } from '../s-jobs.service';
import { Observable } from 'rxjs';
import { OrderPipe } from '../ngx-order.pipe';

@Component({
  selector: 'app-job-performance-title',
  templateUrl: './job-performance-title.component.html',
  styleUrls: ['./job-performance-title.component.css']
})
export class JobPerformanceTitleComponent implements OnInit {

  jobs$: Object;
  pageName = 'job-performance-title';
  clicks: string = 'clicks';

  constructor(private job: SJobsService, private orderPipe: OrderPipe) { }

  ngOnInit() {
    this.job.getJobs().subscribe(
      job => this.jobs$ = job
    );
  }

}

