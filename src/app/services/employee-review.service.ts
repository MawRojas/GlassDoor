import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeReviewService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get("http://localhost:3030/review/employee_reviews");
  }

  getEmployeeReview(id: string) {
    return this.http.get("http://localhost:3030/review/employee_review/" + id); 
  }
}
