import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CreditCardInfoComponent } from '../credit-card-info/credit-card-info.component';
import { ActivatedRoute } from '@angular/router';
import { SettingsDetailsService } from '../services/settings-details.services';

@Component({
  selector: 'app-billing-address',
  templateUrl: './billing-address.component.html',
  styleUrls: ['./billing-address.component.css']
})
export class BillingAddressComponent implements OnInit {
  pageName='billing-address';
  billingInfo:any;
  id: string;  
  billingForm:FormGroup;  
  address:string=''; 
  country:string='';
  state:string='';
  city:string=''  
  zip:any;

  showCard:boolean=true;
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private billingService:SettingsDetailsService) { }
  
  ngOnInit() {
    this.billingService.getBilling(this.id).subscribe((data)=>{
      this.billingInfo=data
    },
    err=> console.log(err),
    ()=>{
      this.billingForm=this.formBuilder.group({
        address:[this.billingInfo.address, Validators.required],
        country:[this.billingInfo.country, Validators.required],
        state:[this.billingInfo.state, Validators.required],
        city:[this.billingInfo.city, Validators.required],
        zip:[this.billingInfo.zip,[Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]],
      });

    });

  }
  displayCreditCard(){
    this.showCard=!this.showCard;
  }

    onSubmit(){
    this.postBasicInfo();
    var submitData=this.billingForm.value;
    submitData.account=this.billingInfo;
    const req= this.billingService.updateBasicInfo(this.id, submitData);
    req.subscribe();
    

  }
  postBasicInfo(){
    var submitData=this.billingForm.value;
    submitData.infoBasic=this.billingInfo;
    const req=this.billingService.updateBasicInfo(this.billingInfo.id, this.address);
    req.subscribe();

  } 

}
