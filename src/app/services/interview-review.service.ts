import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterviewReviewService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get("http://localhost:3030/review/interview_reviews");
  }

  getInterviewReview(id: string) {
    return this.http.get("http://localhost:3030/review/interview_review/" + id);
  }
}
