import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';

declare var google;
@Component({
  selector: 'app-restaurantinfo',
  templateUrl: './restaurantinfo.page.html',
  styleUrls: ['./restaurantinfo.page.scss'],
})
export class RestaurantinfoPage implements OnInit, AfterContentInit {
  map;
  @ViewChild('mapElement') mapElement;
  slideOpts = {
    speed: 600,
    autoplay: true
  };
  constructor() { }
  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
    this.map = new google.maps.Map(
        this.mapElement.nativeElement,
        {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
  }

}
