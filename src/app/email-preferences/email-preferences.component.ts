import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-preferences',
  templateUrl: './email-preferences.component.html',
  styleUrls: ['./email-preferences.component.css']
})
export class EmailPreferencesComponent implements OnInit {
  pageName='email-choices';
  constructor(private router:Router) { }

  ngOnInit() {
  }

  manageAll(){
    this.router.navigate(['notifications']);
  }
}
