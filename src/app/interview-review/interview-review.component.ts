import { Component, OnInit } from '@angular/core';
import { InterviewReviewService } from '../services/interview-review.service';

@Component({
  selector: 'app-interview-review',
  templateUrl: './interview-review.component.html',
  styleUrls: ['./interview-review.component.css']
})
export class InterviewReviewComponent implements OnInit {

  pageName = 'review-page';
  intReviews: any;
  constructor(private interviewReviewService: InterviewReviewService) { }

  ngOnInit() {
    this.interviewReviewService.getAll().subscribe((data) =>{
      this.intReviews = data;
    });
  }

}
