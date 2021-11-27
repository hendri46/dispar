import { Component, OnInit, NgModule } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orderreview',
  templateUrl: './orderreview.page.html',
  styleUrls: ['./orderreview.page.scss'],
})

@NgModule({
  imports: [
    FormsModule
  ]
})

export class OrderreviewPage implements OnInit {

  constructor( private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
