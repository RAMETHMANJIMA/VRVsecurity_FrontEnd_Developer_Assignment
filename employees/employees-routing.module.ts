import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

const routes: Routes = [
  //employee-list:https:/localhost:4200/employees/list
  {path:'list',component: EmployeeListComponent},

  //employee-add :https:/localhost:4200/employees/add
  {path:'add',component:EmployeeAddComponent},

  //employee-edit:https:/localhost:4200/employees/edit
  {path:'edit/:id',component:EmployeeEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
