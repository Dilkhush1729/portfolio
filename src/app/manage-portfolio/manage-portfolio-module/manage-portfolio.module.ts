import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ManagePortfolioRoutingModule } from './manage-portfolio-routing.module';
import { LoginSignupComponent } from '../login-signup/login-signup.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { HomepageComponent } from '../components/pages/homepage/homepage.component';
import { SkillsComponent } from '../components/pages/skills/skills.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from '../components/pages/about/about.component';
import { EducationComponent } from '../components/pages/education/education.component';
import { MyWorksComponent } from '../components/pages/my-works/my-works.component';
import { ContactMeComponent } from '../components/pages/contact-me/contact-me.component';

@NgModule({
  declarations: 
  [
    LoginSignupComponent,
    DashboardComponent,
    HomepageComponent,
    SkillsComponent,
    AboutComponent,
    EducationComponent,
    MyWorksComponent,
    ContactMeComponent
  ],
  imports: [
    CommonModule,
    ManagePortfolioRoutingModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class ManagePortfolioModule { }
