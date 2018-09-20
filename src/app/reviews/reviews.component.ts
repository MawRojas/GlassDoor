import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../services/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  pageName = 'review-page';
  reviewList: any;
  constructor(private reviewService: ReviewsService) { }

  ngOnInit() {
    this.reviewService.getAll().subscribe((data) =>{
    this.reviewList = data
    });
  }
}
