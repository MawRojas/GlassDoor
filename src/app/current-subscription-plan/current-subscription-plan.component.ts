import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionsComponent } from '../subscriptions/subscriptions.component';

@Component({
  selector: 'app-current-subscription-plan',
  templateUrl: './current-subscription-plan.component.html',
  styleUrls: ['./current-subscription-plan.component.css']
})
export class CurrentSubscriptionPlanComponent implements OnInit {
  showOptions:boolean=true;
  pageName='subscribe';
  activePage = "subscribe";
  showNewSub:boolean=true;
  constructor() { }
  
  ngOnInit() {
  }
  addSubscription(){
    this.showOptions=!this.showOptions;
  }
}
