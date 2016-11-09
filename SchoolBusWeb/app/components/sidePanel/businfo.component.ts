/**
 * Created by Madeleine on 2016-11-09.
 */
/**
 * Created by Madeleine on 2016-11-09.
 */
import {Component, OnInit} from "@angular/core";
import {DataService} from "../services/data.service";

@Component({
  moduleId : module.id,
  selector : 'http-bus',
  providers:[DataService],
  template: ` 
     <table class="bustable" *ngFor="let bus of buses">
      <tr >
        <td>{{bus.id}}</td>
        <td></td>
        <td>Time: {{bus.time}}</td>
      </tr>
       <tr >
        <td colspan="3">Longitude: {{bus.longitude}}</td>
      </tr>
      <tr >
        <td colspan="3">Latitude: {{bus.latitude}}</td>
      </tr>
    </table>
`
})

export class HTTPBusComponent implements OnInit{

  buses = [];
  constructor(private httpservice: DataService){}

  ngOnInit(){
    this.httpservice.getBuses()
      .subscribe(
        (data) =>  this.buses = data,
        error => alert(error),
        () => console.log('finish')
      )
  }
}


