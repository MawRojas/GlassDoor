import { Component, OnInit } from '@angular/core';
import { EmployeeReviewService } from '../services/employee-review.service';

@Component({
  selector: 'app-employee-review',
  templateUrl: './employee-review.component.html',
  styleUrls: ['./employee-review.component.css']
})
export class EmployeeReviewComponent implements OnInit {
  pageName = 'review-page';
  empReviews: any;
  constructor(private employeeReviewService: EmployeeReviewService) { }

  ngOnInit() {
    this.employeeReviewService.getAll().subscribe((data) =>{
      this.empReviews = data;
    });
  }
}
