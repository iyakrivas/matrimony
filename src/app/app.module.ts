import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { BodyCompComponent } from './body-comp/body-comp.component';
import { FooterCompComponent } from './footer-comp/footer-comp.component';
import { CvCompComponent } from './cv-comp/cv-comp.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { RecentComponent } from './recent/recent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
@NgModule({
  declarations: [
    AppComponent,
    HeaderCompComponent,
    BodyCompComponent,
    FooterCompComponent,
    CvCompComponent,
    PreferencesComponent,
    RecentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
