import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyDetailsService } from '../services/company-details.service';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-company-updates',
  templateUrl: './single-company-updates.component.html',
  styleUrls: ['./single-company-updates.component.css']
})
export class SingleCompanyUpdatesComponent implements OnInit {

  pageName = 'company-details';
  id: string;
  company: any;
  companyForm: FormGroup;
  updates: any;

  constructor(private route: ActivatedRoute, private companyService: CompanyDetailsService, private _formBuilder: FormBuilder, private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(res => { 
      this.id = res.id;
    });
    this.companyService.getCompanyId(this.id).subscribe(
      data =>  {
        console.log('Data:', data)
        this.company = data;
      },
      err => console.log(err),
      () => {
        this.companyForm = this._formBuilder.group({
          description: [null, Validators.required],
          media: [null, Validators.required]
        });
        this.updates = this.company.company_updates;
      }
    );
  }

  getNumberCharacters(id: string) {
    const numberChar = (<HTMLInputElement>document.getElementById(id)).value.length;
    return numberChar + " out of 1000";
  }

  onSubmit() {
    var submitData = {
      description: (<HTMLInputElement>document.getElementById('input-company-description')).value,
      media: ''
    }
    if (!submitData.description) {
      console.log('Update is empty');
      return;
    }
    var id: any;
    var update: any;
    const req = this.companyService.postUpdate(submitData);
    req.subscribe(data => {
      console.log(data);
      update = data;
      id = update._id;
    },
    err => console.log(err),
    () => {
      var company_updates = {
        "company_updates": []
      }
      this.company.company_updates.forEach(element => {
        company_updates.company_updates.push(element._id)
      });
      company_updates.company_updates.push(id);
      const update_req = this.companyService.updateCompany(this.company._id, company_updates);
      update_req.subscribe();
      update_req.subscribe();
    });
    location.reload();
  }
}
