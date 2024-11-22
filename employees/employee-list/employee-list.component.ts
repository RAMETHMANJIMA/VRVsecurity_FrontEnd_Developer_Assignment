import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EmployeeService} from 'src/app/service/employee.service';
import { Employee } from 'src/app/shared/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  //declare variables
  searchTerm:string='';
  page:number=1;

  filteredEmployees:Employee[]=[];

  //Inject service and router
  constructor(public employeeService:EmployeeService,
    private router:Router
  ) { }

  //life cycle hook

  ngOnInit(): void {
    console.log('Hi,I am Employee List Component');
 //   this.employeeService.getAllEmployees(); //promise

 //observable type
 this.employeeService.getAllEmployeesList().subscribe(
  (data:Employee[])=>{
    this.employeeService.employees=data;  //global
    this.filteredEmployees=data; //component based
  },
  (error)=>{
    console.error("error fetching employees",error);
  }
 )

  }



  
  //method to filter employees based on search term
  filterEmployee():void{
    const term=this.searchTerm.toLowerCase()
    this.filteredEmployees=this.employeeService.employees.filter(
      employee=>employee.EmployeeName.toLowerCase().includes(term)||
      employee.Designation.toLowerCase().includes(term)
    );
  }

  //edit employee
  editEmployee(employee:Employee):void{
    console.log(employee);
    //keep employee object in service
    this.employeeService.employee=Object.assign({},employee);
    this.router.navigate(['/employees/edit',employee.EmployeeId]);
    //Localhost:4200/employees/edit/id
    //Localhost:4200/employee/edit/4
    
  }

  //delete Employee
  deleteEmployee(_id:number):void{
    console.log(_id);
    if(confirm("Are you sure you want to delete?")){
      //employee.IsActive=false;
      console.log("Deleting");
    }
  }

}
