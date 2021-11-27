import { NgModule,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule, ModalController } from '@ionic/angular';

import { ModalObjekWisataPage } from './modal-objek-wisata.page';

const routes: Routes = [
  {
    path: '',
    component: ModalObjekWisataPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalObjekWisataPage]
})
export class ModalObjekWisataPageModule {
  @Input() data: any;
  constructor(private modalCtrl: ModalController) {  }

  async close() {
    await this.modalCtrl.dismiss();
  }
}
