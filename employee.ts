import { Department } from "./department";

export class Employee {

     EmployeeId :number = 0 ;
     EmployeeName :  string  ;
     Designation :  string  ;
     DateOfJoining :  Date =new Date ;
     DepartmentId :number= 2 ;
     Contact :string ;
     IsActive : boolean=false ;
     //oo model
     Department :Department =new Department()
}