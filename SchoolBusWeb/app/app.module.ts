import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {routing, appRoutingProviders} from "./app.routes";
import {AUTH_PROVIDERS} from "angular2-jwt";
import {Auth} from "./components/services/auth.service";
import {AuthGuard}  from "./auth.guard";
import {AppComponent} from "./app.component";

import {HomeComponent} from "./components/home/home.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {RegisterComponent} from "./components/registration/register.component";
import {SideComponent} from "./components/sidePanel/sidepanel.component";
import {CalendarComponent} from "./components/calendar/calendar.component";
//import { AgmCoreModule } from 'angular2-google-maps/core';


@NgModule({
  imports:      [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
   // AgmCoreModule.forRoot({apiKey: 'AIzaSyCdCfA5HSxnEiM7X7CTX4fp9y620nkdeRE'})
  ],
  providers:    [
    appRoutingProviders,
    AUTH_PROVIDERS,
    Auth,
    AuthGuard,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    RegisterComponent,
    SideComponent,
    CalendarComponent,

  ],
  bootstrap:    [AppComponent],
})
export class AppModule {
  constructor() {
  }
}




