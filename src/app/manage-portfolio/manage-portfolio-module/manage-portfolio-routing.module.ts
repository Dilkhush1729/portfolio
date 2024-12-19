import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { LoginSignupComponent } from '../login-signup/login-signup.component';

const routes: Routes = [
  { path: '', component: LoginSignupComponent },
  { path: 'home-page', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagePortfolioRoutingModule { }
