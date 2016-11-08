/**
 * Created by Madeleine on 2016-11-07.
 */
import {Component} from "@angular/core";
import { Auth } from "../services/auth.service";

@Component({
  moduleId : module.id,
  selector : 'calendar',
  templateUrl: 'calendar.component.html'
})

export class CalendarComponent {
  constructor(private auth: Auth) {}

}


