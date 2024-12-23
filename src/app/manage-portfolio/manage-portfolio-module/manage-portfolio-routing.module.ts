import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from '../login-signup/login-signup.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { AboutComponent } from '../components/pages/about/about.component';
import { SkillsComponent } from '../components/pages/skills/skills.component';
import { EducationComponent } from '../components/pages/education/education.component';
import { MyWorksComponent } from '../components/pages/my-works/my-works.component';
import { ContactMeComponent } from '../components/pages/contact-me/contact-me.component';

const routes: Routes = [
  { path: '', component: LoginSignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component:AboutComponent},
  { path: 'skills', component:SkillsComponent},
  { path: 'education', component:EducationComponent},
  { path: 'projects', component:MyWorksComponent},
  { path: 'connect-with-me', component:ContactMeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagePortfolioRoutingModule { }
