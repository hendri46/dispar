import { Component, OnInit, NgModule } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CheckoutPage } from '../checkout/checkout.page';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  private currentNumber1 = 1;
  private currentNumber2 = 1;
  private currentNumber3 = 1;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }

  private increment(step) {
    if (step == 1) {
      this.currentNumber1++;
    }else if (step == 2) {
      this.currentNumber2++;
    }else if (step == 3) {
      this.currentNumber3++;
    }
  }
  private decrement(step) {
    if (step == 1) {
      if (this.currentNumber1  != 1)
      this.currentNumber1--;
    }else if (step == 2) {
      if (this.currentNumber2  != 1)
      this.currentNumber2--;
    }else if (step == 3) {
      if (this.currentNumber3  != 1)
      this.currentNumber3--;
    }
  }


  async openCheckoutPage() {
    this.modalCtrl.dismiss();
    const modal = await this.modalCtrl.create({
      component: CheckoutPage
    });
    modal.present();
}
}
