import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailKulinerPage } from './detail-kuliner.page';

const routes: Routes = [
  {
    path: '',
    component: DetailKulinerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailKulinerPage]
})
export class DetailKulinerPageModule {}
