import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing-component',
  templateUrl: './routing-component.component.html',
  styleUrls: ['./routing-component.component.css']
})
export class RoutingComponentComponent implements OnInit {

  collapseFlag: boolean = false;
  activePage = "home";
  constructor() { }

  ngOnInit() {
  }

  toggleCollapse() {
    if (!this.collapseFlag) {
      document.getElementById("navbar-main").classList.add('collapsed');
      var titles = [].slice.call(document.getElementsByClassName("navbar-element-title"));
      titles.forEach(element => {
        element.classList.add('navbar-element-title-collapse');
      });
    } else  {
      document.getElementById("navbar-main").classList.remove('collapsed');
      var titles = [].slice.call(document.getElementsByClassName("navbar-element-title"));
      titles.forEach(element => {
        element.classList.remove('navbar-element-title-collapse');
      });
    }
    this.collapseFlag = !this.collapseFlag
  }

  onActivate(component) {
    console.log(component.pageName);
    this.activePage = component.pageName;
  }

}
