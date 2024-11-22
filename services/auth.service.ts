import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../shared/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
    private router: Router
  ) { }

  //Verify UserName and Password
  public loginVerify(user: User):Observable<any>{
    //Call WebApi for checking UserName and Password
    //https://localhost:7225/api/logins/Sanjay/San@123
    return this.httpClient.get<User>(environment.apiUrl
      + 'logins/' + user.userName + '/' + user.password);
  }
  //Logout
  public logOutRemoveItems(){
    //Clear all the session and localstorage keys
    localStorage.removeItem("USER_NAME");
    sessionStorage.removeItem("USER_NAME");
    localStorage.removeItem("ACCESS_ROLE");
    localStorage.removeItem("JWT_TOKEN");

    //redirect to Login
    this.router.navigate(['auth/login']);
  }
}