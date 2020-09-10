import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeNameComponent } from './employee-name/employee-name.component'
const routes: Routes = [
  { path: 'employee-name', component: EmployeeNameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
