import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalTempatIbadahPage } from './modal-tempat-ibadah.page';

const routes: Routes = [
  {
    path: '',
    component: ModalTempatIbadahPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalTempatIbadahPage]
})
export class ModalTempatIbadahPageModule {}
