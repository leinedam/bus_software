/**
 * Created by Madeleine on 2016-11-05.
 */
import {Component} from "@angular/core";
import { Auth } from "../services/auth.service";

@Component({
  moduleId : module.id,
  selector : 'side',
  templateUrl: 'side.component.html'
})

export class SideComponent {
  constructor(private auth: Auth) {}

}


