/**
 * Created by Madeleine on 2016-10-22.
 */
import {Component} from "@angular/core";
import {Auth} from "./auth.service";

@Component({
  selector: 'home',
  template: `
   <div> 
     <h4 *ngIf="auth.authenticated()">You are logged in</h4>
     <h5 *ngIf="!auth.authenticated()">Please click 'Log in' to start</h5>
     <button class="btn btn-warning btn-margin" [routerLink]="['login']" *ngIf="!auth.authenticated()">Log In</button>
     <button class="btn btn-warning btn-margin" (click)="auth.logout()" *ngIf="auth.authenticated()">Log Out</button>
     
     <button style="margin-top: 15px" class="btn btn-info btn-margin btn-block" [routerLink]="['register']">New parent? Register here</button>
   </div>

  `
})



export class HomeComponent {
  constructor(private auth: Auth) {}
}

