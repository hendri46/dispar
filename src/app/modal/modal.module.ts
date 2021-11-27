import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule, ModalController } from '@ionic/angular';

import { ModalPage } from './modal.page';
import { async } from 'q';

const routes: Routes = [
  {
    path: '',
    component: ModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalPage]
})
export class ModalPageModule {
  @Input() data: any;
  constructor(private modalCtrl: ModalController) {  }

  async close() {
    await this.modalCtrl.dismiss();
  }

}
