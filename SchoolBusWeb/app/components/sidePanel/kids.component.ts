/**
 * Created by Madeleine on 2016-11-09.
 */
import {Component, OnInit} from "@angular/core";
import {DataService} from "../services/data.service";

@Component({
  moduleId : module.id,
  selector : 'http-kids',
  providers:[DataService],
  template: ` 
     <table class="kidstable">
      <tr>
        <td><h3>KID NAME</h3></td>
        <td><h3>BUS ID</h3></td>
      </tr>
      <tr *ngFor="let kid of kids">
        <td>{{kid.name}}</td>
        <td>{{kid.bus}}</td>
      </tr>
    </table>
`
})

export class HTTPKidsComponent implements OnInit{

  kids = [];
  constructor(private httpservice: DataService){}

  ngOnInit(){
    this.httpservice.getKids()
      .subscribe(
        (data) =>  this.kids = data,
         error => alert(error),
         () => console.log('finish')
      )
  }
}


