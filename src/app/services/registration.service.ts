import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
