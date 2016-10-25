import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AUTH_PROVIDERS} from "angular2-jwt";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home.component";
import {LoginComponent} from "./login.component";
import {RegisterComponent} from "./register.component";

import {routing, appRoutingProviders} from "./app.routes";
import { AgmCoreModule } from 'angular2-google-maps/core';
//import {ANGULAR2_GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';


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
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  bootstrap:    [AppComponent],
})
export class AppModule {
  constructor() {
  }
}




