import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CabsComponent } from './cabs/cabs.component';
import { DriverComponent } from './driver/driver.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddcabsComponent } from './addcabs/addcabs.component';
import "@angular/compiler";
import { ReactiveFormsModule } from '@angular/forms';
import { AdddriversComponent } from './adddrivers/adddrivers.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CabsComponent,
    DriverComponent,
    NavbarComponent,
    AddcabsComponent,
    AdddriversComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
