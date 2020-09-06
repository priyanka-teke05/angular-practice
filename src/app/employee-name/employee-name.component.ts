import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-name',
  templateUrl: './employee-name.component.html',
  styleUrls: ['./employee-name.component.css']
})
export class EmployeeNameComponent implements OnInit {

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
