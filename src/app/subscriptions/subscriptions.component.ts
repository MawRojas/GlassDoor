import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { BillingAddressComponent } from '../billing-address/billing-address.component';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {
  @Input() showSubscriptions:boolean;

constructor(private formBuilder: FormBuilder, private router:Router) { }
pageName='new-subscriptions';
availPlans:FormGroup;
id: string;

twoSlot:string='';
threeSlot:string='';
fiveSlot:string='';
  ngOnInit() {
  
  }
  addPayment(){
    this.router.navigate(['payment_settings']);
  }
}
