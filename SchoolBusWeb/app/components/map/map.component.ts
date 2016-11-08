/**
 * Created by Madeleine on 2016-10-25.
 */
import { Component } from '@angular/core';
import {SebmGoogleMap} from 'angular2-google-maps/core';

@Component({
  selector: 'map-root',
  providers: [SebmGoogleMap],
  styles: [
    `.sebm-google-map-container {
         height: 300px;
         width: 300px;
       }`
  ],
  template: `
    <h1>My First angular2-google-maps App</h1>
    
    <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
    
    </sebm-google-map>
    `
})
export class MapComponent {
  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 8; // initial zoom of the map
}
