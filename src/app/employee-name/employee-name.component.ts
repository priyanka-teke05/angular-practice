import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-name',
  templateUrl: './employee-name.component.html',
  styleUrls: ['./employee-name.component.css']
})
export class EmployeeNameComponent implements OnInit {
  public employees= [];
  constructor(private _employeeService: EmployeeServiceService) { }

  ngOnInit(): void {
    this.employees=this._employeeService.getEmployees();
  }

  
}
