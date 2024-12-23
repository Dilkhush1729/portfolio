import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './manage-portfolio/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', 
    loadChildren: () => import('./manage-portfolio/manage-portfolio-module/manage-portfolio.module').then(m => m.ManagePortfolioModule) 
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
