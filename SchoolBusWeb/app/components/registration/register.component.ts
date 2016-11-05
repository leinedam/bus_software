/**
 * Created by Madeleine on 2016-10-23.
 */
import {Component} from "@angular/core";
import { Auth } from "../services/auth.service";

@Component({
  moduleId : module.id,
  selector: 'register',
  templateUrl: 'register.template.html',

})

export class RegisterComponent {
  constructor(private auth: Auth) {}
}
