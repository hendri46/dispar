import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  { path: '', redirectTo: 'tabs/home', pathMatch: 'full' },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'kategori',
        children: [
          {
            path: '',
            loadChildren: '../deals/deals.module#DealsPageModule'
          }
        ]
      },
      {
        path: 'berita',
        children: [
          {
            path: '',
            loadChildren: '../berita/berita.module#BeritaPageModule'
          }
        ]
      },
      {
        path: 'favorit',
        children: [
          {
            path: '',
            loadChildren: '../favorit/favorit.module#FavoritPageModule'
          }
        ]
      },
      {
        path: 'pengaturan',
        children: [
          {
            path: '',
            loadChildren: '../pengaturan/pengaturan.module#PengaturanPageModule'
          }
        ]
      },
      {
        path: 'tutup',
        children: [
          {
            path: '',
            loadChildren: '../tutup/tutup.module#TutupPageModule'
          }
        ]
      },

      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
