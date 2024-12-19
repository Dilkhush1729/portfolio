import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagePortfolioModule } from './manage-portfolio/manage-portfolio-module/manage-portfolio.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ManagePortfolioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
