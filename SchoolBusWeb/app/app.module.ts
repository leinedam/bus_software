import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AUTH_PROVIDERS} from "angular2-jwt";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home.component";
import {LoginComponent} from "./login.component";
import {RegisterComponent} from "./register.component";
import {routing, appRoutingProviders} from "./app.routes";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,


  ],
  providers:    [
    appRoutingProviders,
    AUTH_PROVIDERS

  ],
  imports:      [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap:    [AppComponent],
})
export class AppModule {
  constructor() {
  }
}




