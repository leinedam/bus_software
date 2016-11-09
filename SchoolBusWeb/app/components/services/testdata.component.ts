/**
 * Created by Madeleine on 2016-11-05.
 */
import {Component} from "@angular/core";
import {DataService} from "./data.service";

@Component({
  moduleId : module.id,
  selector : 'http-test',
  providers:[DataService],
  template: ` <button (click)="onTestGet()">test request</button>  <br> 
              <p>Output {{getData}}</p> 
              <button (click)="onTestPost()">post request</button>  <br> 
              <p>Output {{postData}}</p> 
`

})

export class HTTPTestComponent {

  getData: string;
  postData: string;

  constructor(private httpservice: DataService){}

  onTestGet(){
    this.httpservice.getCurrentTime()
      .subscribe(
        data => this.getData= JSON.stringify(data),
        error => alert(error),
        () => console.log('finish')
      );
  }

  onTestPost(){
    this.httpservice.postJSON()
      .subscribe(
        data => this.postData = JSON.stringify(data),
        error => alert(error),
       () => console.log('finish')
      );

  }



}


