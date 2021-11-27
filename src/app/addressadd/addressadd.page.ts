import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-addressadd',
  templateUrl: './addressadd.page.html',
  styleUrls: ['./addressadd.page.scss'],
})
export class AddressaddPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }
  goBack() {
    this.modalCtrl.dismiss();
  }

}
