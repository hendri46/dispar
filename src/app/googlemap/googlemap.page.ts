import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

declare var google;
@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.page.html',
  styleUrls: ['./googlemap.page.scss'],
})
export class GooglemapPage implements OnInit, AfterContentInit {
fullmap;
@ViewChild('mapElement') mapElement;

    
    constructor( public modalCtrl: ModalController,private route: ActivatedRoute) { }

  ngOnInit() {
  }

  goBack() {
    this.modalCtrl.dismiss();
  }

  ngAfterContentInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
console.log(id);
    this.fullmap = new google.maps.Map(
        this.mapElement.nativeElement,
        {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
  }

}
