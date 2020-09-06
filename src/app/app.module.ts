import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from "@angular/forms"; 
import { Component1Component } from './component1/component1.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ChangeTextDirective } from './change-text.directive';
import { MycustompipePipe } from './mycustompipe.pipe';
import { EmployeeNameComponent } from './employee-name/employee-name.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeServiceService } from './employee-service.service'
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    NewCmpComponent,
    ChangeTextDirective,
    MycustompipePipe,
    EmployeeNameComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
