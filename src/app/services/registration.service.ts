import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get("http://localhost:3030/registration/job_details");
  }

  getRegistrationId(id: string) {
    console.log("http://localhost:3030/registration/job_details/" + id);
    return this.http.get("http://localhost:3030/registration/job_details/" + id);
  }

  postJob(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    var url = "http://localhost:3030/registration/job_details/";
    console.log(data);
    return this.http.post(url, data, httpOptions);
  }
}
