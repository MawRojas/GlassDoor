import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { BillingInformationService} from '../services/billing-information.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing-information',
  templateUrl: './billing-information.component.html',
  styleUrls: ['./billing-information.component.css']
})
export class BillingInformationComponent implements OnInit {
  billingForm:FormGroup;  
  pageName = 'post-job';
  
  constructor(private formBuilder: FormBuilder, private billingInformationService: BillingInformationService, private router: Router) { }
  
  ngOnInit() {
    this.billingForm=this.formBuilder.group({
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      street_addr:[null, Validators.required],
      country:[null, Validators.required],
      state:[null, Validators.required],
      city:[null, Validators.required],
      zipcode:[null,[Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]],
    });
  }

  onSubmit(){
    if (this.billingForm.valid) {
      console.log("Submit")
    const req = this.billingInformationService.postBillingInformation(this.billingForm.value).subscribe(res => {
      let id = res['_id'];
    }, (err) => {
      console.log(err);
    })
    this.billingForm.reset();
    this.router.navigateByUrl('/card_details');
  }
  }

}
