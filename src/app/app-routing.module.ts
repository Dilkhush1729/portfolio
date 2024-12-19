import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagePortfolioModule } from './manage-portfolio/manage-portfolio-module/manage-portfolio.module';

const routes: Routes = [
  { path: '', loadChildren: () => import('./manage-portfolio/manage-portfolio-module/manage-portfolio.module').then(m => m.ManagePortfolioModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
