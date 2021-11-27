import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SadarwisataPage } from './sadarwisata.page';

const routes: Routes = [
  {
    path: '',
    component: SadarwisataPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SadarwisataPage]
})
export class SadarwisataPageModule {}
