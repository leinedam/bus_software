import {Component} from "@angular/core";
import {Auth} from "./autho/auth.service";

@Component({
  selector: 'my-app',
  providers: [ Auth ],
  templateUrl: 'app/template/app.template.html'

})

export class AppComponent {

}


