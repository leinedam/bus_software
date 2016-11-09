/**
 * Created by Madeleine on 2016-11-08.
 */
import {Component, Attribute} from '@angular/core'

@Component({
  selector: 'now',
  template: `
      <h3 (updateTime)="updateMyTime()">Current Time: {{date | date: 'h:mm:ss'}} {{date | date: 'a'}} </h3>
    `
})
export class Now {
  private date;

  constructor(@Attribute("format") format) {

    this.date =  new Date();

    setInterval(() => {
      this.date =  new Date();
    }, 1000);
  }

}
