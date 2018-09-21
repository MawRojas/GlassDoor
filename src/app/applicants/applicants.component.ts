import { Component, OnInit } from '@angular/core';
import { ApplicantsService } from '../applicants.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent implements OnInit {

  pageName = 'applicants';
  applicants$: Object;

  constructor(private applicant: ApplicantsService) { }

  ngOnInit() {
    this.applicant.getApplicants().subscribe(
      applicant => this.applicants$ = applicant
    );
  }

}
