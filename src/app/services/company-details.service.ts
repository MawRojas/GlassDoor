import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyDetailsService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get("http://localhost:3030/company/company");
  }

  getCompanyId(id: string) {
    return this.http.get("http://localhost:3030/company/company/" + id);
  }

  updateCompany(id: string, data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    var url: string = ("http://localhost:3030/company/company/" + id);
    console.log(url);
    console.log(data);
    // switch (updateSection) {
    //   case "basic info":
    //   return this.http.put(url, {
    //     "annualRevenue": data.a,
    //     "website": "www.firstcompany.com.mx",
    //     "hqCity": "Piscataway, NJ"},
    //      httpOptions); 
    // } 
    return this.http.put(url, data, httpOptions);
  }

  updateCEO(id: string, data: JSON) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    var url: string = ("http://localhost:3030/company/ceo/" + id);
    console.log(url);
    console.log(data);
    return this.http.put(url, data, httpOptions);
  }

  postLocation(data: JSON) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    var url = "http://localhost:3030/company/location/";
    console.log(data);
    return this.http.post(url, data, httpOptions);
  }

  updateLocation(companyId: string, data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(data);
    var url: string = ("http://localhost:3030/company/company/" + companyId);
    return this.http.put(url, data, httpOptions);
  }

  postBenefit(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    var url = "http://localhost:3030/company/benefit/";
    console.log(data);
    return this.http.post(url, data, httpOptions);
  }

  updateBenefit(companyId: string, data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(data);
    var url: string = ("http://localhost:3030/company/company/" + companyId);
    return this.http.put(url, data, httpOptions);
  }

  postAward(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    var url = "http://localhost:3030/company/award/";
    console.log(data);
    return this.http.post(url, data, httpOptions);
  }

  updateAward(companyId: string, data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(data);
    var url: string = ("http://localhost:3030/company/company/" + companyId);
    return this.http.put(url, data, httpOptions);
  }

  postUpdate(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    var url = "http://localhost:3030/company/update/";
    console.log(data);
    return this.http.post(url, data, httpOptions);
  }

  postPicture(data: any, name: string) {
    var url = "http://localhost:3030/file/upload/" + name;
    console.log(url);
    console.log(data);
    return this.http.post(url, data, {observe: 'response', responseType: 'text'});
  }

  getPicturePath(name: string) {
    var url = "http://localhost:3030/file/path/" + name;
    return this.http.get(url, {responseType: 'text'});
  }

  postCompanyPhoto(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    var url = "http://localhost:3030/company/photo/";
    console.log(data);
    return this.http.post(url, data, httpOptions);
  }
}
