import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-component1',
  //selector as class selector
  // selector: '.app-component1',

  selector: '[app-component1]',

  template: `<h2>
              Welcome {{name}}
              </h2>
              <h2>{{2*2}}</h2>

              <h2>{{"Welcome" + name}}</h2>
              <h2>{{name.length}}</h2>
              <h2>{{name.toUpperCase()}}</h2>
              <h2>{{greetUser()}}</h2>
              <input [id]="myId" type="text" value="Priyanka">
              <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Priyanka">
              <h2 [class]="successClass"> class binding</h2>
              <h2 [class.text-danger]="hasError"> class binding</h2>
              `,
  styles: [`
  .text-success {
    color: green;
  }
  .text-danger {
    color: red;
  }
  .text-special {
    font-style: italic;
  }`]
})
export class Component1Component implements OnInit {
  public name="Priyanka";
  public myId ="testId";
  public successClass="text-success";
  public hasError=true;
  //create property and then bind
  public isDisabled = false;

  
  constructor() { }

  ngOnInit(): void {
  }
  greetUser() {
    return "Hello " +this.name;
  }
}
