import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { LoginComponent } from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PagesRoutingModule } from './pages/pages-routing.module';


const routes: Routes = [

  //AUTH
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},

  {path: '', redirectTo:'/dashboard/',pathMatch:'full'},
  {path: '**', component:NotFoundComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
