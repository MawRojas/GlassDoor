import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-component',
  templateUrl: './routing-component.component.html',
  styleUrls: ['./routing-component.component.css']
})
export class RoutingComponentComponent implements OnInit {

  collapseFlag: boolean = false;
  activePage = "home";
  companyID: string;
  selectedSectionID: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  toggleCollapse() {
    if (!this.collapseFlag) {
      document.getElementById("navbar-main").classList.add('collapsed');
      document.getElementById("menu-bars").classList.remove('change');
      var titles = [].slice.call(document.getElementsByClassName("navbar-element-title"));
      titles.forEach(element => {
        element.classList.add('navbar-element-title-collapse');
      });
    } else  {
      document.getElementById("navbar-main").classList.remove('collapsed');
      document.getElementById("menu-bars").classList.add('change');
      var titles = [].slice.call(document.getElementsByClassName("navbar-element-title"));
      titles.forEach(element => {
        element.classList.remove('navbar-element-title-collapse');
      });
    }
    this.collapseFlag = !this.collapseFlag
  }

  toggleNavbarItemSelected(id: string) {
    console.log(id);
    if (!this.selectedSectionID) {
      console.log('First time');
      this.selectedSectionID = id;
      console.log(this.selectedSectionID);
      document.getElementById(this.selectedSectionID).classList.add('selected');
      return;
    }
    document.getElementById(this.selectedSectionID).classList.remove('selected');
    this.selectedSectionID = id;
    document.getElementById(this.selectedSectionID).classList.add('selected');
  }

  onActivate(component) {
    this.activePage = component.pageName;
    this.companyID = component.id;
    //this.toggleNavbarItemSelected(component.navbarID);
  }

}
