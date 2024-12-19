// C:\Users\Laptop care\Desktop\New Project\my-portfolio\src\app\manage-portfolio\manage-portfolio-module\manage-portfolio.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ManagePortfolioRoutingModule } from './manage-portfolio-routing.module';
import { LoginSignupComponent } from '../login-signup/login-signup.component';
import { HomepageComponent } from '../homepage/homepage.component';


@NgModule({
  declarations: [LoginSignupComponent,HomepageComponent],
  imports: [
    CommonModule,
    ManagePortfolioRoutingModule,
    FormsModule
  ]
})
export class ManagePortfolioModule { }
