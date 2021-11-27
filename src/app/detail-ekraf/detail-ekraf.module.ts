import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailEkrafPage } from './detail-ekraf.page';

const routes: Routes = [
  {
    path: '',
    component: DetailEkrafPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailEkrafPage]
})
export class DetailEkrafPageModule {}
