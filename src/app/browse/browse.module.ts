import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BrowsePage } from './browse.page';
import {ListPipe} from '../../app/list.pipe';
const routes: Routes = [
  {
    path: '',
    component: BrowsePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BrowsePage, ListPipe]
})
export class BrowsePageModule {}
