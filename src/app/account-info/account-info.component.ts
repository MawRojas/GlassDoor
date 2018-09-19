import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SettingsDetailsService } from '../services/settings-details.services';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private accountService: SettingsDetailsService) { }
  userSetting: FormGroup;
  pageName='account-info';  
  id: string="5ba0ff4da0a1d72ce83a1807";  
  account:any;
  firstName:string='';
  lastName:string='';
  jobTitle:string='';
  email:string='';
  currrentPassword:string=''  ;
  newPassword:string='';
  newAccount: any;
  newFirstName: string='';
  newLastName:string='';
  newJobTitle:string='';
  newEmail:string='';
  accountData:any;
  ngOnInit() {

    this.accountService.getAccountId(this.id).subscribe((data)=>{
      this.accountData=data;
    },
    err=> console.log(err), 
    ()=>{
        this.userSetting=this.formBuilder.group({
        firstName:[this.accountData.firstName, Validators.required],
        lastName:[this.accountData.lastName, Validators.required],
        jobTitle:[this.accountData.jobTitle, Validators.required],
        email:[this.accountData.email, Validators.required],
        currrentPassword:[null, Validators.required],
        newPassword:[null, Validators.required],
            
      });
    });
    

      
    
    }
  onSubmit(){
    this.updateAccount();
    this.postAccount();
    var submitData=this.userSetting.value;
    submitData.account=this.account;
    const req= this.accountService.updateAccount(this.id, submitData);
    req.subscribe();
    

  }

  updateAccount(){
    if(this.userSetting.controls['firstName'].touched && this.userSetting.controls['lastName'].touched && this.userSetting.controls['jobTitle'].touched && this.userSetting.controls['email'].touched){
      this.newFirstName=this.userSetting.value.firstName;
      this.newLastName=this.userSetting.value.lastName;
      this.newJobTitle=this.userSetting.value.jobTitle;
      this.newEmail=this.userSetting.value.email;


    }
    const req=this.accountService.updateAccount(this.newAccount.id, this.newFirstName);
  }

  postAccount(){
    var submitData=this.userSetting.value;
    submitData.account=this.account;
    const req=this.accountService.updateAccount(this.newAccount.id, this.newFirstName);
    req.subscribe();
 
  }

 
}

