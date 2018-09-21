import { Component, OnInit } from '@angular/core';
import { SJobsService } from '../s-jobs.service';
import { Observable } from 'rxjs';
import { OrderPipe } from '../ngx-order.pipe';

@Component({
  selector: 'app-job-performance-day',
  templateUrl: './job-performance-day.component.html',
  styleUrls: ['./job-performance-day.component.css']
})
export class JobPerformanceDayComponent implements OnInit {

  jobs$: Object;
  pageName = 'job-performance-day';
  clicks: string = 'clicks';
  today = new Date();

  constructor(private job: SJobsService, private orderPipe: OrderPipe) { }

  ngOnInit() {
    this.job.getJobs().subscribe(
      job => this.jobs$ = job
    );
  }

}
