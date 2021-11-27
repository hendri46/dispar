import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JeniswisataPage } from './jeniswisata.page';

const routes: Routes = [
  {
    path: '',
    component: JeniswisataPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JeniswisataPage]
})
export class JeniswisataPageModule {}
