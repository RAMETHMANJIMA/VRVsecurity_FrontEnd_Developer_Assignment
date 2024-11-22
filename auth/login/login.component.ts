import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //Declare variables
  loginForm: FormGroup;
  isSubmitted: boolean = false;
  error: string = '';


  constructor(private FormBuilder: FormBuilder, 
    private router: Router, private authService:AuthService) { }

  //Life Cycle Hook
  ngOnInit(): void {

    //Create Reactive Form
    this.loginForm = this.FormBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  //Get all Controls from LoginForm for Validation
  get formControls() {
    return this.loginForm.controls;
  }

  //Functionality
  loginCredentials(): void {
    //Setting value for isSubmitted
    this.isSubmitted = true;

    //Checking Form, is it is VALID
    if (this.loginForm.invalid) {
      this.error = 'Please enter UserName and Password';
      return;
    }


    //Checking Form, is it is VALID
    if (this.loginForm.valid) {
      this.error = '';
      console.log(this.loginForm.value);

      //Check Login Credentials
      this.authService.loginVerify(this.loginForm.value)
      .subscribe(
        (response)=>{
          console.log(response);
          console.log(response.roleId);

          //Implements the process 
          if(response.roleId===1){
            //Admin Dashboard
            localStorage.setItem("USER_NAME",response.uName);
            sessionStorage.setItem("USER_NAME",response.uName);
            localStorage.setItem("ACCESS_ROLE",response.roleId.toString());
            localStorage.setItem("JWT_TOKEN",response.token);
            
            console.log("Admin panel");
            this.router.navigate(['/auth/admin']);
          }
          else if(response.roleId===2){
            //Manager Dashboard
            localStorage.setItem("USER_NAME",response.uName);//browser to browser
            sessionStorage.setItem("USER_NAME",response.uName);//only to that particular browser
            localStorage.setItem("ACCESS_ROLE",response.roleId.toString());
            localStorage.setItem("JWT_TOKEN",response.token);
            
            console.log("Manager Panel");
            this.router.navigate(['/auth/manager']);
          }
          else if(response.roleId===3){
            console.log("Coordinator Panel");
          }
          else{
            console.log("Unknown Role")
          }
        },
        (error)=>{
          this.error="Invalid UserName and Password";
        }
      );
    }
  }
}