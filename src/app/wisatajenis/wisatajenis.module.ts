import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WisatajenisPage } from './wisatajenis.page';

const routes: Routes = [
  {
    path: '',
    component: WisatajenisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WisatajenisPage]
})
export class WisatajenisPageModule {}
