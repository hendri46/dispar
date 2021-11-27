import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WisataperkabPage } from './wisataperkab.page';

const routes: Routes = [
  {
    path: '',
    component: WisataperkabPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WisataperkabPage]
})
export class WisataperkabPageModule {}
