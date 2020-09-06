import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employees= [
    {"id":1,"name":"Sheha","age":23},
    {"id":2,"name":"Gita","age":25},
    {"id":3,"name":"Pooja","age":30},
    {"id":4,"name":"Anjali","age":35},
    {"id":5,"name":"Pooja","age":30}
  ]
}
