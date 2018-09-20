import { Component, OnInit } from '@angular/core';
import { InterviewReviewService } from '../services/interview-review.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-interview-review',
  templateUrl: './single-interview-review.component.html',
  styleUrls: ['./single-interview-review.component.css']
})
export class SingleInterviewReviewComponent implements OnInit {
  pageName = 'review-page';
  int: any;
  id: any;
  constructor(private interviewReviewService: InterviewReviewService, private route: ActivatedRoute) {
    this.route.params.subscribe(res => { 
      this.id = res.id;
      console.log(this.id);
    });
   }

  ngOnInit() {
    this.interviewReviewService.getInterviewReview(this.id).subscribe((data) =>{
      this.int = data;
    });
  }

}
