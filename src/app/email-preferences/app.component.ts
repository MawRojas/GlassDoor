import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myjs';
  public name = 'Marc';
  //public message = "";
   tasks: any[] = [
       {id: 1, name: "task1", status: "processing"},
       {id: 2, name: "task2", status: "pending"},
       {id: 3, name: "task3", status: "complete"}
  ]
  public statusData = "";
}
