import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ManagePortfolioRoutingModule } from './manage-portfolio-routing.module';
import { LoginSignupComponent } from '../login-signup/login-signup.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';


@NgModule({
  declarations: [LoginSignupComponent,DashboardComponent],
  imports: [
    CommonModule,
    ManagePortfolioRoutingModule,
    FormsModule
  ]
})
export class ManagePortfolioModule { }
