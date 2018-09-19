import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyDetailsService } from '../services/company-details.service';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-company-logo',
  templateUrl: './single-company-logo.component.html',
  styleUrls: ['./single-company-logo.component.css']
})
export class SingleCompanyLogoComponent implements OnInit {

  pageName = 'company-details';
  id: string;
  company: any;
  companyForm: FormGroup;
  selectedFile: File;
  navbarID: string = "navbar-item-company-logo";

  constructor(private route: ActivatedRoute, private companyService: CompanyDetailsService, private _formBuilder: FormBuilder, private location: Location) {
    this.route.params.subscribe(res => { 
      this.id = res.id;
    });
  }

  ngOnInit() {
    this.companyService.getCompanyId(this.id).subscribe(
      data =>  {
        console.log('Data:', data)
        this.company = data;
      },
      err => console.log(err),
      () => {
        this.companyForm = this._formBuilder.group({
          logo: [null, Validators.required]
        });
      }
    );
    document.getElementById(this.navbarID).classList.add('selected');
  }

  ngOnDestroy() {
    document.getElementById(this.navbarID).classList.remove('selected');
  }

  onSubmit() {
    var picture: any;
    var company_photo: any;

    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile, this.selectedFile.name);
    const req = this.companyService.postPicture(uploadData, this.selectedFile.name);
    req.subscribe(data => {
      console.log(data);
    },
    err => console.log(err),
    () => {
        var submitData = this.companyForm.value;
        submitData.logo = this.selectedFile.name;
        const update_req = this.companyService.updateCompany(this.company._id, submitData);
        update_req.subscribe();
        update_req.subscribe();
    });
    location.reload();
  }

  getPhotoURL(name: string) {
    return "http://localhost:3030/file/get/" + name;
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

}
