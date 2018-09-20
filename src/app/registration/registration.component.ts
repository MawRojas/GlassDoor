import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { CompanyDetailsService } from '../services/company-details.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  pageName = 'home';
  registrationList: any;
  companyNames: any;
  userForm: FormGroup;

  constructor(private registrationService: RegistrationService, private companyService: CompanyDetailsService, private _formbuilder: FormBuilder, private router: Router ) { }

  ngOnInit() {
    this.registrationService.getAll().subscribe((data) =>{
    this.registrationList = data
    });

    this.companyService.getAll().subscribe((data) => {
    this.companyNames = data
    });

    this.userForm = this._formbuilder.group({ 
		  company_name: [null, Validators.required],
		  job_title: [null, Validators.required],
		  city: [null, Validators.required],
      state: [null, Validators.required],
      job_description: [null, Validators.required],
      street_address: [],
      zipcode: [null, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]
	  })
  }

  onSubmit(){
    if (this.userForm.valid) {
    const req = this.registrationService.postJob(this.userForm.value).subscribe(res => {
      let id = res['_id'];
    }, (err) => {
      console.log(err);
    })
    this.userForm.reset();
    this.router.navigateByUrl('/billing_information');
  }
  }

  ShowHide(){
    console.log("ShowHide")
  }
}
