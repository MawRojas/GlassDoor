import { Component, OnInit } from '@angular/core';
import { SJobsService } from '../s-jobs.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slotted-jobs',
  templateUrl: './slotted-jobs.component.html',
  styleUrls: ['./slotted-jobs.component.css']
})
export class SlottedJobsComponent implements OnInit {

  jobs$: Object;
  ops = ['Newest First', 'Job Title A-Z']
  selectedOption2: null;

  constructor(private job: SJobsService ) { }

  ngOnInit() {
    this.job.getJobs().subscribe(
      job => this.jobs$ = job
    );
  }

}
