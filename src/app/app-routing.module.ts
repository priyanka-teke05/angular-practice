import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeNameComponent } from './employee-name/employee-name.component'
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'
import { OrderViewComponent } from './order-view/order-view.component'

const routes: Routes = [
  { path: 'employee-name', component: EmployeeNameComponent },
  { path: 'employee-details', component: EmployeeDetailsComponent },
  { path: 'order-view/:id', component: OrderViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
