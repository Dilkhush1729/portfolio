import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from '../login-signup/login-signup.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: LoginSignupComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagePortfolioRoutingModule { }
