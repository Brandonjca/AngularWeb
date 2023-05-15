import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';


//Rutas
const routes: Routes = [
  {path: '', component:AuthComponent},
  //AUTH
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  //{path: '', redirectTo:'/dashboard/',pathMatch:'full'},


];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class AuthRoutingModule { }
