import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'detail',component:DetailComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
