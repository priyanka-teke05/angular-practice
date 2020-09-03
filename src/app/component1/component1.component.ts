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
              <input [disabled]="false" id="{{myId}}" type="text" value="Priyanka">
              `,
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  public name="Priyanka";
  public myId ="testId";
  
  constructor() { }

  ngOnInit(): void {
  }

  greetUser() {
    return "Hello " +this.name;
  }

}
