import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FeedbackComponent } from './feedback/feedback.component';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { SignUpComponent } from './sign-up/sign-up.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'about', component:AboutComponent},
  {path:'myservices', component:MyServicesComponent},
  {path:'feedback', component:FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
