import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Restaurantpage1Page } from './restaurantpage1.page';

const routes: Routes = [
  {
    path: '',
    component: Restaurantpage1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Restaurantpage1Page]
})
export class Restaurantpage1PageModule {}
