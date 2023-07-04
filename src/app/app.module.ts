import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { TodayComponent } from './today/today.component';
import { PrioritiesComponent } from './priorities/priorities.component';
import { PlansComponent } from './plans/plans.component';
import { GratitudeComponent } from './gratitude/gratitude.component';
import { DreamsComponent } from './dreams/dreams.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    TodayComponent,
    PrioritiesComponent,
    PlansComponent,
    GratitudeComponent,
    DreamsComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
