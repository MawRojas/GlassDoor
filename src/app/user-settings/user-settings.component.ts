import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PasswordComponent } from '../password/password.component';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {
  infoForm:FormGroup;
  emailForm:FormGroup;
  id: string;  
  passwordReset:FormGroup;
  email:string='';
  password:string='';
  newPassword:string='';
  pageName='user-info';

  pwordReset:boolean=true;
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {

    this.emailForm=this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      
    });
    this.passwordReset=this.formBuilder.group({
      password:[null, Validators.required],
      newPassword:[null, Validators.required],
    });
  }
  passReset(){
    this.pwordReset=!this.pwordReset;
  }

  
}
