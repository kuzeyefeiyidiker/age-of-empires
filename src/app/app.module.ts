import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './layout/header/header.component';
import { NotFoundPageComponent } from './common/not-found-page/not-found-page.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { RouteReuseStrategy } from '@angular/router';
import { CustomRouteReuseStrategy } from './common/custom-route-reuse-strategy';

@NgModule({
  declarations: [AppComponent, LayoutComponent, HeaderComponent, NotFoundPageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, StoreModule.forRoot({}, {})],
  providers: [[{ provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy }]],
  bootstrap: [AppComponent],
})
export class AppModule {}
