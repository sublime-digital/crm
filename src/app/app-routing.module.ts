import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { TodayComponent } from './today/today.component';
import { PrioritiesComponent } from './priorities/priorities.component';
import { PlansComponent } from './plans/plans.component';
import { DreamsComponent } from './dreams/dreams.component';
import { GratitudeComponent } from './gratitude/gratitude.component';

const routes: Routes = [
  { path: "now", component: TodayComponent },
  { path: "next", component: PrioritiesComponent },
  { path: "someday", component: GratitudeComponent },
  { path: "dreams", component: DreamsComponent },
  { path: "plans", component: PlansComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "now", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
