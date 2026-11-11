import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header-component/header-component';
import { HomeComponent } from './home-component/home-component';
import { NotFoundComponent } from './not-found-component/not-found-component';
import { AboutComponent } from './about-component/about-component';

@NgModule({
  declarations: [App, HeaderComponent, HomeComponent, NotFoundComponent, AboutComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
