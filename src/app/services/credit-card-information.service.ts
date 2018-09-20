import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreditCardInformationService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get("http://localhost:3030/registration/credit_card_details");
  }

  getCreditCardId(id: string) {
    console.log("http://localhost:3030/registration/credit_card_details/" + id);
    return this.http.get("http://localhost:3030/registration/credit_card_details/" + id);
  }

  postCreditCardInformation(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    var url = "http://localhost:3030/registration/payment/";
    console.log(data);
    return this.http.post(url, data, httpOptions);
  }
}
