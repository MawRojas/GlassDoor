import { Component, OnInit, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SettingsDetailsService } from '../services/settings-details.services';
@Component({
  selector: 'app-credit-card-info',
  templateUrl: './credit-card-info.component.html',
  styleUrls: ['./credit-card-info.component.css']
})
export class CreditCardInfoComponent implements OnInit {
  @Input() showCreditCard:  boolean;

  creditCard:FormGroup;
  fullName:string='';
  creditNumber:string='';
  expDate:string='';
  cvc:string='';
  id: string='5ba1571fe511020608821d35';  
  creditData:any;
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private creditService: SettingsDetailsService) { }


  ngOnInit() {
    this.creditService.getCreditCard(this.id).subscribe((data)=>{
      this.creditData=data;
    },
    err=> console.log(err),
    ()=>{
      this.creditCard=this.formBuilder.group({
        fullName:[this.creditData.fullName, Validators.required],
        creditNumber:[this.creditData.creditNumber, Validators.required],
        expDate:[this.creditData.expDate, Validators.required],
        cvc:[this.creditData.cvc, Validators.required],
      });

    });
  }
  onSubmit(){
    this.postCredit();
    var submitData=this.creditCard.value;
    submitData.creditData=this.creditData;
    const req= this.creditService.updateCreditCard(this.id, submitData);
    req.subscribe();
  }

  postCredit(){
    var submitData=this.creditCard.value;
    submitData.creditData=this.creditData;
    const req=this.creditService.updateCreditCard(this.creditData, this.fullName);
    req.subscribe();
  }
}
