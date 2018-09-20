import { Component, OnInit } from '@angular/core';
import { CreditCardInformationService } from '../services/credit-card-information.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-credit-card-information',
  templateUrl: './credit-card-information.component.html',
  styleUrls: ['./credit-card-information.component.css']
})
export class CreditCardInformationComponent implements OnInit {
  creditCard:FormGroup;
  pageName = 'home';
  constructor(private formBuilder: FormBuilder, private creditCardInformationService: CreditCardInformationService, private router: Router) { }

  ngOnInit() {
    this.creditCard=this.formBuilder.group({
      full_name_on_card:[null, Validators.required],
      credit_card_number:[null, Validators.required],
      exp_month:[null, Validators.required],
      exp_Year:[null, Validators.required],
      cvc_code:[null, Validators.required],
    });
  }

  onSubmit(){
    if (this.creditCard.valid) {
      console.log("Submit")
    const req = this.creditCardInformationService.postCreditCardInformation(this.creditCard.value).subscribe(res => {
      let id = res['_id'];
    }, (err) => {
      console.log(err);
    })
    this.creditCard.reset();
  }
}
}
