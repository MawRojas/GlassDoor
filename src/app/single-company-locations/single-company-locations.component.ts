import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyDetailsService } from '../services/company-details.service';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-company-locations',
  templateUrl: './single-company-locations.component.html',
  styleUrls: ['./single-company-locations.component.css']
})
export class SingleCompanyLocationsComponent implements OnInit {

  pageName = 'company-details';
  id: string;
  company: any;
  companyForm: FormGroup;
  locations: any;
  navbarID: string = "navbar-item-company-locations";
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
          name: [null, Validators.required],
          address: [null, Validators.required],
          city: [null, Validators.required],
          zip_code: [null, Validators.required]
        });
        this.locations = this.company.company_locations;
      }
    );
    document.getElementById(this.navbarID).classList.add('selected');
  }

  ngOnDestroy() {
    document.getElementById(this.navbarID).classList.remove('selected');
  }

  updateCompanyLocation(data: any) {
    var id: any;
    var location: any;
    const req = this.companyService.postLocation(data);
    req.subscribe(data => {
      console.log(data);
      location = data;
      id = location._id;
    },
    err => console.log(err),
    () => {
      var company_locations = {
        "company_locations": []
      };
      console.log(company_locations);
      this.locations.forEach(element => {
        company_locations.company_locations.push(element._id);
      });
      company_locations.company_locations.push(id);
      const update_req = this.companyService.updateLocation(this.company._id, company_locations);
      update_req.subscribe();
      update_req.subscribe();
    });
  }

  updateRemovedLocation() {
    var company_locations = {
      "company_locations": []
    };
    console.log(company_locations);
    this.locations.forEach(element => {
      company_locations.company_locations.push(element._id);
    });
    const update_req = this.companyService.updateLocation(this.company._id, company_locations);
    update_req.subscribe();
    update_req.subscribe();
  }

  removeLocation(name: string) {
    var index = this.findLocationIndex(name);
    if (index > -1) {
      console.log("Removing: " + this.locations[index].name);
      this.locations.splice(index, 1);
      this.itemRemoved = true;
    }
  }

  findLocationIndex(name: string) {
    for (var i = 0; i < this.locations.length; i++) {
      if(this.locations[i].name == name) return i;
    }
    return -1
  }

  onSubmit() {
    if (this.hasPostedLocation()) {
      var submitData = this.companyForm.value;
      this.updateCompanyLocation(submitData);
    } else {
      this.updateRemovedLocation();
    }

    location.reload();
  }

  showSubmitButton(){
    return (this.hasPostedLocation() || this.itemRemoved);
  }

  hasPostedLocation() {
    return (this.companyForm.controls['name'].touched && this.companyForm.controls['name'].valid) && (this.companyForm.controls['address'].touched && this.companyForm.controls['address'].valid) && (this.companyForm.controls['city'].touched && this.companyForm.controls['city'].valid) && (this.companyForm.controls['zip_code'].touched && this.companyForm.controls['zip_code'].valid)
  }

}
