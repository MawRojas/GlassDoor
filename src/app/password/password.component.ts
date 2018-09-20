import { Component, OnInit, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  @Input() showPassword:boolean;
  passwordReset:FormGroup;  
  password:string='';
  newPassword:string='';
  pageName='password-reset';
  id: string;  

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.passwordReset=this.formBuilder.group({
      password:[null, Validators.required],
      newPassword:[null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    });
  }
  onSubmit(){
    
  }
}
