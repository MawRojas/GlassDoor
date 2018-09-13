import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  pageName = 'home';
  registrationList: any;
  constructor(private registrationService: RegistrationService ) { }

  ngOnInit() {
    this.registrationService.getAll().subscribe((data) =>{
    this.registrationList = data
    });
  }

}
