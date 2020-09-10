import { Component } from '@angular/core';
import {Cars} from './cars'
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Team';
  todayDate= new Date();
  information = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}}; 

  fullName: string = "Priyanka Teke";
  
  name= new FormControl('');

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  })

  constructor(private fb: FormBuilder) {}
 
  onSubmit() {
    console.warn(this.profileForm.value);
  }

  profileFormWithAddress = this.fb.group({
    firstName:['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street:[''],
      city: [''],
      state: [''],
      zip: ['']
    })
  }); 

  profileAddressSubmit(){

  }
}
