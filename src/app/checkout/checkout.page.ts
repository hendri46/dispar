import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddresslistPage } from '../addresslist/addresslist.page';
import { PrivacyPage } from '../privacy/privacy.page';
import { AddcartPage } from '../addcart/addcart.page';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }


  async goPrivacyPage() {
    const modal = await this.modalCtrl.create({
      component: PrivacyPage
    });
    modal.present();
  }

  async openAddCartPage() {
    const modal = await this.modalCtrl.create({
      component: AddcartPage
    });
    modal.present();
  }


}
