import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }

  getEmployees() {
   return [
      {"id":1,"name":"Sheha","age":23},
      {"id":2,"name":"Gita","age":25},
      {"id":3,"name":"Pooja","age":30},
      {"id":4,"name":"Anjali","age":35},
      {"id":5,"name":"Pooja","age":30}
    ]
  }
}
