import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailsingleekrafPage } from './detailsingleekraf.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsingleekrafPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailsingleekrafPage]
})
export class DetailsingleekrafPageModule {}
