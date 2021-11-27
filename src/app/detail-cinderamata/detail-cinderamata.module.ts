import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailCinderamataPage } from './detail-cinderamata.page';

const routes: Routes = [
  {
    path: '',
    component: DetailCinderamataPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailCinderamataPage]
})
export class DetailCinderamataPageModule {}
