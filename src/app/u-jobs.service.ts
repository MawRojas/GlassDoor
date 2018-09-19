import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UJobsService {

  constructor(private http: HttpClient) { }

  getJobs(){
    return this.http.get('http://localhost:3030/job/job')
}
}
