import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, AfterViewInit {

  title: string;
  empId: number = 234;

  constructor() {
    this.title = 'lifecycle-demo';

    console.log("Inside Parent Constructor");
  }

  ngOnInit() {
    console.log("Inside Parent ngOnInit");
  }

  ngOnChanges() {
    console.log("Inside Parent ngOnChanges");
  }

  changeEmpId() {
    this.empId = 567;
  }

  ngAfterViewInit() {
    console.log("Inside Parent ngAfterViewInit");
  }

}
