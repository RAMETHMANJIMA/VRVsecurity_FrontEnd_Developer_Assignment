import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  constructor(public employeeService:EmployeeService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.employeeService.getAllDepartments();
  }
   //Submit form
  onSubmit(form:NgForm){
    console.log(form.value);
    this.updateEmployee(form);
    form.reset();
  }
    // call update method

    updateEmployee(form?: NgForm){
      console.log("Updating..");
      this.employeeService.updateEmployee(form.value)
      .subscribe(
        (response)=>{
          console.log(response);
        },
        (error)=>{
          console.log(error);
        }
      )
    }




  

}