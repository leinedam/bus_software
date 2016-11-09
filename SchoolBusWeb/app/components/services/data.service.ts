/**
 * Created by Madeleine on 2016-11-08.
 */

import { Http } from "@angular/http";
import {Injectable} from "@angular/core";


@Injectable()
export class DataService {

  constructor(private  http: Http){}

  fetchData(){

    return this.http.get('/kids.JSON').map(
      (res) => res.json()
    ).subscribe(
      (data) => console.log(data)
    );
  }
}


