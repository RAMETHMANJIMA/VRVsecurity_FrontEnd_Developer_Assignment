import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import{AuthGuard } from 'src/app/auth/auth.guard';

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'home',component: HomeComponent},
  {path:'admin',component: AdminComponent,
    canActivate: [AuthGuard],data:{role:'1'}
  },
  {path:'manager',component: ManagerComponent,
    canActivate: [AuthGuard],data:{role:'2'}
  },
  {path:'pagenotfound',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
