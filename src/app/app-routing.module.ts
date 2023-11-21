import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CabsComponent } from './cabs/cabs.component';
import { DriverComponent } from './driver/driver.component';

const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:"full"},
  {path:'dashboard', component: DashboardComponent},
  {path:'cabs', component:CabsComponent},
  {path:'driver', component:DriverComponent }
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
