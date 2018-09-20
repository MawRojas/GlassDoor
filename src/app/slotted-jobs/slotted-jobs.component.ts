import { Component, OnInit } from '@angular/core';
import { SJobsService } from '../s-jobs.service';
import { Observable } from 'rxjs';
import { OrderPipe } from '../ngx-order.pipe';

@Component({
  selector: 'app-slotted-jobs',
  templateUrl: './slotted-jobs.component.html',
  styleUrls: ['./slotted-jobs.component.css']
})
export class SlottedJobsComponent implements OnInit {

  pageName = 'slotted-jobs';
  jobs$: Object;
  ops = ['Newest First', 'Job Title A-Z']
  selectedOption2: null;
  selectedOp: string = '';

  selectChangeHandler (event: any) {
    //update the ui
    this.selectedOp = event.target.value;
  }

  constructor(private job: SJobsService, private orderPipe: OrderPipe ) { }

  ngOnInit() {
    this.job.getJobs().subscribe(
      job => this.jobs$ = job
    );
  }

}
