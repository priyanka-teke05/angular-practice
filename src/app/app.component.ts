import { Component } from '@angular/core';
import {Cars} from './cars'
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
}
