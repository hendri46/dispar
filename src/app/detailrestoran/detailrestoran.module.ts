import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailrestoranPage } from './detailrestoran.page';

const routes: Routes = [
  {
    path: '',
    component: DetailrestoranPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailrestoranPage]
})
export class DetailrestoranPageModule {}
