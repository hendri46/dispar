import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddressaddPage } from '../addressadd/addressadd.page';

@Component({
  selector: 'app-addresslist',
  templateUrl: './addresslist.page.html',
  styleUrls: ['./addresslist.page.scss'],
})
export class AddresslistPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async addAddress() {
    const modal = await this.modalController.create({
      component: AddressaddPage
    });
    modal.present();
  }

}
