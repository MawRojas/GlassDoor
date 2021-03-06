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
  navbarID: string = 'navbar-item-company-photos';
  photoSubmittedFlag: boolean = false;
  itemRemoved: boolean = false;

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
    document.getElementById(this.navbarID).classList.add('selected');
  }

  ngOnDestroy() {
    document.getElementById(this.navbarID).classList.remove('selected');
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    this.photoSubmittedFlag = true;
  }

  onSubmit() {
    if (this.photoSubmittedFlag) {
      this.uploadPhoto();
    } else {
      this.updateRemovedPhoto();
    }
    location.reload();
  }

  uploadPhoto() {
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
          this.photos.forEach(element => {
            company_photos.company_photos.push(element._id)
          });
          company_photos.company_photos.push(company_photo._id);
          const update_req = this.companyService.updateCompany(this.company._id, company_photos);
          update_req.subscribe();
          update_req.subscribe();
        });
    });
  }

  updateRemovedPhoto() {
    var company_photos = {
      "company_photos": []
    }
    this.photos.forEach(element => {
      company_photos.company_photos.push(element._id)
    });
    const update_req = this.companyService.updateCompany(this.company._id, company_photos);
    update_req.subscribe();
    update_req.subscribe();
  }

  changeSelectedCategory(cat: string) {
    this.selectedCategory = cat;
    this.toggleSelectedClassCategory();
    console.log(this.selectedCategory);
  }

  toggleSelectedClassCategory() {
    if (this.selectedCategory == 'employer-photos') {
      document.getElementById(this.selectedCategory).classList.add('selected');
      document.getElementById('community-photos').classList.remove('selected');
    } else {
      document.getElementById(this.selectedCategory).classList.add('selected');
      document.getElementById('employer-photos').classList.remove('selected');
    }
  }

  getPhotosList() {
    var arr: any[] = [];
    arr = (this.selectedCategory == 'employer-photos') ? this.getEmployerPhotos() : this.getCommunityPhotos();
    console.log(arr);
    return arr;
  }

  getEmployerPhotos() {
    var arr: any[] = [];
    this.photos.forEach(element => {
      if (element.category == 'Employer') arr.push(element);
    });
    return arr;
  }

  getCommunityPhotos() {
    var arr: any[] = [];
    this.photos.forEach(element => {
      if (element.category == 'Community') arr.push(element);
    });
    return arr;
  }

  getPhotoURL(name: string) {
    return "http://localhost:3030/file/get/" + name;
  }

  removePhoto(name: string) {
    var index = this.findPhotoIndex(name);
    if (index > -1) {
      console.log("Removing: " + this.photos[index].source + 'from ' +  this.photos[index].category);
      this.photos.splice(index, 1);
      this.itemRemoved = true;
    }
  }

  findPhotoIndex(source: string) {
    const category = this.photo_categories[this.getCategoryIndex()];
    for (var i = 0; i < this.photos.length; i++) {
      if(this.photos[i].source == source && this.photos[i].category == category) return i;
    }
    return -1
  }

  getCategoryIndex() {
    return (this.selectedCategory == 'employer-photos') ? 0 : 1;
  }
}
