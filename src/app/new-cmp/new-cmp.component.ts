import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {

  newComponent="Entered in new coponent created"
  months = ["January", "February", "March", "April", "May", "June", "July", 
  "August", "September", "October", "November", "December"];

  isAvailable=true;

  myClickFunction(event) {
    this.isAvailable = !this.isAvailable;
  }

  changeMonths(event) {
    alert("Changed month from the dropdown");
    console.log(event);
  }

  constructor() { }
  ngOnInit(): void {
  }
}
