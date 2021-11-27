import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OlehOlehPage } from './oleh-oleh.page';

const routes: Routes = [
  {
    path: '',
    component: OlehOlehPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OlehOlehPage]
})
export class OlehOlehPageModule {}
