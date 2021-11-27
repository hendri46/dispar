import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListtempatibadahPage } from './listtempatibadah.page';

const routes: Routes = [
  {
    path: '',
    component: ListtempatibadahPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListtempatibadahPage]
})
export class ListtempatibadahPageModule {}
