import { Component, OnInit } from '@angular/core';
import { UJobsService } from '../u-jobs.service';
import { Observable } from 'rxjs';
import { OrderPipe } from '../ngx-order.pipe';

@Component({
  selector: 'app-unslotted-jobs',
  templateUrl: './unslotted-jobs.component.html',
  styleUrls: ['./unslotted-jobs.component.css']
})
export class UnslottedJobsComponent implements OnInit {

  pageName = 'unslotted-jobs';
  ops = ['Newest First', 'Job Title A-Z']
  jobs$: Object;

  constructor(private job: UJobsService, private orderPipe: OrderPipe) { }

  ngOnInit() {
    this.job.getJobs().subscribe(
      job => this.jobs$ = job
    );
  }

}
