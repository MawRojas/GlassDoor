import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SettingsDetailsService{
    
    constructor(private http: HttpClient) { }    

    getAll(){
        return this.http.get("http://localhost:3030/settings/account/");
    }
//ACCOUNT
    getAccountId(id:string){
        return this.http.get("http://localhost:3030/settings/account/"+id);
    }
    updateAccount(id:string, data:any){
        const HttpOptions={
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        var url: string= ('http://localhost:3030/settings/account/'+id);
        console.log(url);
        console.log(data);
        return this.http.put(url, data, HttpOptions);    
    }
    postAccount(data: JSON) {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json'
          })
        };
        var url = "http://localhost:3030/settings/account";
        console.log(data);
        return this.http.post(url, data, httpOptions);
      }
    
//BASIC INFO  
    getBasicInfo(id:string){
        return this.http.get("http://localhost:3030/settings/info_basic/"+id);
    }

    updateBasicInfo(id:string, data:any){
        const httpOptions={
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        var url: string=("http://localhost:3030/settings/info_basic/"+id);
        console.log(data);
        return this.http.put(url,data, httpOptions);
    }

    postBasicInfo(data:JSON){
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
          };
          var url = "http://localhost:3030/settings/info_basic";
          console.log(data);
          return this.http.post(url, data, httpOptions);
    }
    
//BILLING
    getBilling(id:string){
        return this.http.get("http://localhost:3030/settings/billing/"+id);
    }

    updateBilling(id:string, data:any){
        const httpOptions={
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        var url: string=("http://localhost:3030/settings/billing"+id);
        console.log(data);
        return this.http.put(url,data, httpOptions);
    }
    
    postBilling(data:JSON){
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
          };
          var url = "http://localhost:3030/settings/billing";
          console.log(data);
          return this.http.post(url, data, httpOptions);
    }
//CREDIT CARD
    getCreditCard(id:string){
        return this.http.get("http://localhost:3030/settings/credit/"+id);
    }
    updateCreditCard(id:string, data: any){
        const httpOptions={
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        var url: string=("http://localhost:3030/settings/credit"+id);
        console.log(data);
        return this.http.put(url,data, httpOptions);
    }
    postCreditCard(data:JSON){
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
          };
          var url = "http://localhost:3030/settings/credit";
          console.log(data);
          return this.http.post(url, data, httpOptions);     
    }
    
//PASSWORD
    getPassword(id:string){
        return this.http.get("http://localhost:3030/settings/password_account/"+id);
    }

    updatePassword(id:string, data:any){
        const httpOptions={
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        var url: string=("http://localhost:3030/settings/password_account"+id);
        console.log(data);
        return this.http.put(url,data, httpOptions);
    }

    postPassword(data:JSON){
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
          };
          var url = "http://localhost:3030/settings/password_account";
          console.log(data);
          return this.http.post(url, data, httpOptions);     
    }
//SUBSCRIPTION
    getSubscription(id:string){
        return this.http.get("http://localhost:3030/settings/subscription/"+id);
    }

    updateSubscription(id:string, data:any){
        const httpOptions={
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        var url: string=("http://localhost:3030/settings/subscription"+id);
        console.log(data);
        return this.http.put(url,data, httpOptions);
    }

    postSubscription(data:any){
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
          };
          var url = "http://localhost:3030/settings/subscription";
          console.log(data);
          return this.http.post(url, data, httpOptions);        
    }
//SETTINGS
    getSettings(id:string){
        return this.http.get("http://localhost:3030/settings/settings   /"+id);
    }

    updateSettings(id:string, data:any){
        const httpOptions={
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        var url: string=("http://localhost:3030/settings/settings"+id);
        console.log(data);
        return this.http.put(url,data, httpOptions);
    }

    postSettings(data:any){
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
          };
          var url = "http://localhost:3030/settings/settings";
          console.log(data);
          return this.http.post(url, data, httpOptions);        
    }
}