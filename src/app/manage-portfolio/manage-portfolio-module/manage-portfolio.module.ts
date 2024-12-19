import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ManagePortfolioRoutingModule } from './manage-portfolio-routing.module';
import { LoginSignupComponent } from '../login-signup/login-signup.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HomepageComponent } from '../components/pages/homepage/homepage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: 
  [
    LoginSignupComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    ManagePortfolioRoutingModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class ManagePortfolioModule { }
