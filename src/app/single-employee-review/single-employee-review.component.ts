import { Component, OnInit } from '@angular/core';
import { EmployeeReviewService } from '../services/employee-review.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-employee-review',
  templateUrl: './single-employee-review.component.html',
  styleUrls: ['./single-employee-review.component.css']
})
export class SingleEmployeeReviewComponent implements OnInit {
  pageName = 'review-page';
  id: any;
  emp: any;
  constructor(private employeeReviewService: EmployeeReviewService, private route: ActivatedRoute) {
    this.route.params.subscribe(res => { 
      this.id = res.id;
      console.log(this.id);
    });
   }

  ngOnInit() {
    
    this.employeeReviewService.getEmployeeReview(this.id).subscribe((data) =>{
      this.emp = data;
    });
  }
}
