import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicantsService {

  constructor(private http: HttpClient) { }
  
  getApplicants(){
    return this.http.get('http://localhost:3030/applicant/applicant')
}
}
