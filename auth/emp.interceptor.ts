import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class EmpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("I am intercepting...");

    // If login, no need to check JWT
    if (request.url.includes('auth/logins')) {
      console.log("Not checking JWT");
      // Pass the request as it is if it's a login request
      return next.handle(request);
    } else {
      const token = localStorage.getItem('JWT_TOKEN');

      // Checking ACCESS ROLE and JWT TOKEN
      if (localStorage.getItem('ACCESS_ROLE') && token) {
        // If JWT is there, clone the request and set the Authorization header
        const newRequest = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
        return next.handle(newRequest);
      }
    }
    return next.handle(request);

  }
}