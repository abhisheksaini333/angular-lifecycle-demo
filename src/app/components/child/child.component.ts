import { Component, OnInit, Input, OnChanges, AfterViewInit, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, AfterViewInit {

  @Input()
  emp: number = 0;

  @ViewChild('username') userNameEle: any;
  @ViewChild('password') pwdEle: any;

  constructor(private _renderer2: Renderer2) {
    console.log("value of emp, Inside Child Constructor: " + this.emp)
    console.log(" ==> Inside Child Constructor");
  }

  ngOnInit(): void {
    console.log("value of emp, Inside Child ngOnInit: " + this.emp)
    console.log(" ==> Inside Child ngOnInit");
  }

  ngOnChanges() {
    console.log("value of emp, Inside Child ngOnChanges: " + this.emp)
    console.log(" ==> Inside Child ngOnChanges");
  }

  ngAfterViewInit() {
    console.log(" ==> Inside Child ngAfterViewInit");
    this.userNameEle.nativeElement.focus();
  }

}
