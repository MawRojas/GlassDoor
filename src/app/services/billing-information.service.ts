import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillingInformationService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get("http://localhost:3030/registration/billing_details");
  }

  getBillingId(id: string) {
    console.log("http://localhost:3030/registration/billing_details/" + id);
    return this.http.get("http://localhost:3030/registration/billing_details/" + id);
  }

  postBillingInformation(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    var url = "http://localhost:3030/registration/billing/";
    console.log(data);
    return this.http.post(url, data, httpOptions);
  }
}
