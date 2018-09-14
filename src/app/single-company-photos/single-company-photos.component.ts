import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyDetailsService } from '../services/company-details.service';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-company-photos',
  templateUrl: './single-company-photos.component.html',
  styleUrls: ['./single-company-photos.component.css']
})
export class SingleCompanyPhotosComponent implements OnInit {

  pageName = 'company-details';
  id: string;
  company: any;
  companyForm: FormGroup;
  photos: any;
  employerPhotos: any;
  communityPhotos: any;
  photo_categories = ['Employer', 'Community'];
  selectedFile: File;
  selectedCategory:string = 'employer-photos';

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
          source: [null, Validators.required],
          category: [this.photo_categories[0], Validators.required],
          isFeatured: [false]
        });
        this.photos = this.company.company_photos;
      }
    );
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
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
        submitData.source = this.selectedFile.name;
        const photo_request = this.companyService.postCompanyPhoto(submitData)
        photo_request.subscribe(data => {
          console.log(data);
          company_photo = data;
        },
        err => console.log(err),
        () => {
          var company_photos = {
            "company_photos": []
          }
          this.company.company_photos.forEach(element => {
            company_photos.company_photos.push(element._id)
          });
          company_photos.company_photos.push(company_photo._id);
          const update_req = this.companyService.updateCompany(this.company._id, company_photos);
          update_req.subscribe();
          update_req.subscribe();
        });
    });
    location.reload();
  }

  changeSelectedCategory(cat: string) {
    this.selectedCategory = cat;
    console.log(this.selectedCategory);
  }

  getPhotosList() {
    var arr: any[] = [];
    arr = (this.selectedCategory == 'employer-photos') ? this.getEmployerPhotos() : this.getCommunityPhotos();
    console.log(arr);
    return arr;
  }

  getEmployerPhotos() {
    var arr: any[] = [];
    this.company.company_photos.forEach(element => {
      if (element.category == 'Employer') arr.push(element);
    });
    return arr;
  }

  getCommunityPhotos() {
    var arr: any[] = [];
    this.company.company_photos.forEach(element => {
      if (element.category == 'Community') arr.push(element);
    });
    return arr;
  }

  getPhotoURL(name: string) {
    return "http://localhost:3030/file/get/" + name;
  }

}
