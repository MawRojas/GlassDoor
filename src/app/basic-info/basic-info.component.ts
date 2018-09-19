import { Component, OnInit, Input, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SettingsDetailsService } from '../services/settings-details.services';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css'],
  
})
export class BasicInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private info:SettingsDetailsService) { }
  
  pageName='user-info';
  infoForm:FormGroup;
  id: string="5ba13acc13e61018c05d74ff";  
  firstName:string='';
  lastName:string='';
  jobTitle:string='';
  gender:string='';
  birthYear:number;
  highestEducation:string='';
  infoBasic:any;
  ngOnInit() {

    this.info.getBasicInfo(this.id).subscribe((data)=>{
      this.infoBasic=data
    },
    err=> console.log(err), 
    ()=>{
          this.infoForm=this.formBuilder.group({
            firstName: [this.infoBasic.firstName, Validators.required],
            lastName:[this.infoBasic.lastName, Validators.required],
            jobTitle:[this.infoBasic.jobTitle, Validators.required],
            gender:[this.infoBasic.gender,Validators.required],
            birthYear:[this.infoBasic.birthYear, Validators.required],
            highestEducation:[this.infoBasic.highestEducation, Validators.required],
        });
    });
  }

  
  onSubmit(){
    this.postBasicInfo();
    var submitData=this.infoForm.value;
    submitData.account=this.infoBasic;
    const req= this.info.updateBasicInfo(this.id, submitData);
    req.subscribe();
    

  }
  postBasicInfo(){
    var submitData=this.infoForm.value;
    submitData.infoBasic=this.infoBasic;
    const req=this.info.updateBasicInfo(this.infoBasic.id, this.firstName);
    req.subscribe();

  }  

}
