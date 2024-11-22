import { Injectable } from '@angular/core';
import { Employee } from '../shared/employee';
import {HttpClient} from'@angular/common/http'

import { environment } from 'src/environments/environment'; 
import { Observable } from 'rxjs';
import { Department } from '../shared/department';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
//global variable 
employee:  Employee = new Employee();


//array
employees:  Employee [];

//departments array
departments:Department [];


// in  order to get this mthd 3 party need to inject name is http client module need to call in parent root app module
  constructor(private httpclient:HttpClient){}
    //get put post  delete ,patch
    //get 
    getAllEmployees():void{
      this.httpclient.get(environment.apiUrl +'employees')
      .toPromise()
      .then((response)=>{
        console.log(response);
        this.employees=response as Employee[];
      },
      (error)=>{
        console.log(error);
      }
    );

    }
    //2-get all employees-observale types
    getAllEmployeesList():Observable<any>{
      return this.httpclient.get(environment.apiUrl+'employees');
    }

    //3-Insert

    insertEmployee(employee:Employee):Observable<any>{
      return this.httpclient.post(environment.apiUrl+'employees',employee);
    }

    //4-Updateng 
    updateEmployee(employee:Employee):Observable<any>{
      return this.httpclient.put(environment.apiUrl+'employees/'+employee.EmployeeId,employee);
    }

    //5-Delete

    //6-Get all departments-promise
    
    getAllDepartments():void{
      console.log('In Service');
      this.httpclient.get(environment.apiUrl +'employees/Department')
      .toPromise()
      .then((response)=>{
        console.log(response);
        this.departments =response as Department [];
      },
      (error)=>{
        console.log(error);
      }
    );
  
   }
  }
