import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot): boolean {
    // Current role and expected role
    const currentRole = localStorage.getItem("ACCESS_ROLE");
    const expectedRole = next.data.role;

    // If roles do not match, redirect to login page
    if (currentRole !== expectedRole) {
      localStorage.removeItem("USER_NAME");
      sessionStorage.removeItem("USER_NAME");
      localStorage.removeItem("ACCESS_ROLE"); // Corrected spelling here
      sessionStorage.removeItem("JWT_TOKEN");
      this.router.navigate(['auth/login']);
      return false;
    }

    return true;
  }
}