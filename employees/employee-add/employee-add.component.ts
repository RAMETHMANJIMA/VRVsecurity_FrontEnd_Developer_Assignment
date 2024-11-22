import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/service/employee.service';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  constructor(public employeeService:EmployeeService,
    private router:Router,private toastr:ToastrService) 
    { }

  ngOnInit(): void {
    this.employeeService.getAllDepartments();
  }
  //Submit form
  onSubmit(form:NgForm){
    console.log(form.value);
    this.addEmployee(form);
  
  }
    // call insert method

    addEmployee(form?: NgForm){
      console.log("Inserting");
      this.employeeService.insertEmployee(form.value)
      .subscribe(
        (response)=>{
          console.log(response);
          this.toastr.success('Record has been inserted succesfully','EMSv2024');
          form.reset();
          window.location.href='/employees/list';
       
        },
        (error)=>{
          console.log(error);
          this.toastr.error('oops!Something went wrong,try again','EMSv2024')
        }
      )
    }




  

}
