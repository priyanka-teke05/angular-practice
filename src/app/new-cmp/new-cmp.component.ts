import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css'],
  providers: [ UpperCasePipe]
})
export class NewCmpComponent implements OnInit {

  newComponent="Entered in new coponent created"
  months = ["January", "February", "March", "April", "May", "June", "July", 
  "August", "September", "October", "November", "December"];

  isAvailable=true;
  num: number= 0;

  myClickFunction(event) {
    this.isAvailable = !this.isAvailable;
  }

  changeMonths(event) {
    alert("Changed month from the dropdown");
    console.log(event);
  }

  constructor(private upperCasePipe: UpperCasePipe) { }
  uppercase=this.upperCasePipe.transform('angularpipes Uppercasepipe');
  ngOnInit(): void {
  }
}
