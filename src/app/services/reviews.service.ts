import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get("http://localhost:3030/review/reviews");
  }

  getReviewId(id: string) {
    console.log("http://localhost:3030/review/review/" + id);
    return this.http.get("http://localhost:3030/reviews/review/" + id);
  }
}
