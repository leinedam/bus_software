/**
 * Created by Madeleine on 2016-10-23.
 */
import {Component} from "@angular/core";
import { Auth } from "../services/auth.service";
import { Parent }  from './parent';
import  { Kid } from './kid';

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: 'register.template.html'
})
export class RegisterComponent {
  kidsNumber = ['1', '2',
    '3', '4' ,'5'];
  model = new Parent(18, 'Madeleine S', 'asdasd','Toronto', 'myemailsample@gmail.com', this.kidsNumber[0]);
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  active = true;

  newParent() {
    this.model = new Parent( 0 , '', '','','','');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }



  showFormControls(form: any) {

    return form && form.controls['name'] &&
      form.controls['name'].value; //
  }
}
