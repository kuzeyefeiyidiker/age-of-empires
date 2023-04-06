import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './common/layout/header/header.component';
import { LayoutComponent } from './common/layout/layout.component';
import { NotFoundPageComponent } from './common/not-found-page/not-found-page.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LayoutComponent, NotFoundPageComponent],
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot({}, {})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
