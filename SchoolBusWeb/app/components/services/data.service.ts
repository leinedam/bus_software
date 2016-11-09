/**
 * Created by Madeleine on 2016-11-08.
 */

import {Http, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map'


@Injectable()
export class DataService {

  constructor(private  http: Http){}

  getCurrentTime(){
      return this.http.get('http://ip.jsontest.com/')
  }

  postJSON(){
      var json = JSON.stringify({var1: 'test', var2: 3});
      var params ='json=' + json;
      var headers = new Headers();
      headers.append('Content-Type','application/x-www-form-urlencoded');

    return this.http.post('http://validate.jsontest.com',
    params,{
        headers : headers
      }).map(res => res.json());
  }

}


