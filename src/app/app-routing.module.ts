import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // { path: '', loadChildren: './slider/slider.module#SliderPageModule' },
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'forgotpass', loadChildren: './forgotpass/forgotpass.module#ForgotpassPageModule' },
  { path: 'browse', loadChildren: './browse/browse.module#BrowsePageModule' },
  { path: 'restaurantpage1', loadChildren: './restaurantpage1/restaurantpage1.module#Restaurantpage1PageModule' },
  { path: 'favorites', loadChildren: './favorites/favorites.module#FavoritesPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'deals', loadChildren: './deals/deals.module#DealsPageModule' },
  { path: 'restaurantinfo', loadChildren: './restaurantinfo/restaurantinfo.module#RestaurantinfoPageModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },
  { path: 'googlemap', loadChildren: './googlemap/googlemap.module#GooglemapPageModule' },
  { path: 'addresslist', loadChildren: './addresslist/addresslist.module#AddresslistPageModule' },
  { path: 'addressadd', loadChildren: './addressadd/addressadd.module#AddressaddPageModule' },
  { path: 'menuselect', loadChildren: './menuselect/menuselect.module#MenuselectPageModule' },
  { path: 'editprofile', loadChildren: './editprofile/editprofile.module#EditprofilePageModule' },
  { path: 'myorders', loadChildren: './myorders/myorders.module#MyordersPageModule' },
  { path: 'orderreview', loadChildren: './orderreview/orderreview.module#OrderreviewPageModule' },
  { path: 'coupons', loadChildren: './coupons/coupons.module#CouponsPageModule' },
  { path: 'invite', loadChildren: './invite/invite.module#InvitePageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutPageModule' },
  { path: 'privacy', loadChildren: './privacy/privacy.module#PrivacyPageModule' },
  { path: 'addcart', loadChildren: './addcart/addcart.module#AddcartPageModule' },
  { path: 'support', loadChildren: './support/support.module#SupportPageModule' },
  { path: 'wisata', loadChildren: './wisata/wisata.module#WisataPageModule' },
  { path: 'detail-wisata/:id', loadChildren: './detailwisata/detailwisata.module#DetailwisataPageModule' },
  { path: 'list-wisata', loadChildren: './listwisata/listwisata.module#ListwisataPageModule' },
  { path: 'list-hotel/:id', loadChildren: './listhotel/listhotel.module#ListhotelPageModule' },
  { path: 'list-tempat-ibadah/:id', loadChildren: './listtempatibadah/listtempatibadah.module#ListtempatibadahPageModule' },
  { path: 'list-restoran/:id', loadChildren: './listrestoran/listrestoran.module#ListrestoranPageModule' },
  { path: 'list-event', loadChildren: './listevent/listevent.module#ListeventPageModule' },
  { path: 'list-ekraf', loadChildren: './listekraf/listekraf.module#ListekrafPageModule' },
  { path: 'detail-hotel/:id', loadChildren: './detailhotel/detailhotel.module#DetailhotelPageModule' },
  { path: 'modal-objek-wisata', loadChildren: './modal-filter/modal-objek-wisata/modal-objek-wisata.module#ModalObjekWisataPageModule' },
  { path: 'detail-tempat-ibadah/:id', loadChildren: './detailibadah/detailibadah.module#DetailibadahPageModule' },
  { path: 'berita', loadChildren: './berita/berita.module#BeritaPageModule' },
  { path: 'favorit', loadChildren: './favorit/favorit.module#FavoritPageModule' },
  { path: 'pengaturan', loadChildren: './pengaturan/pengaturan.module#PengaturanPageModule' },
  { path: 'list-sadar-wisata', loadChildren: './sadarwisata/sadarwisata.module#SadarwisataPageModule' },
  { path: 'list-desa-wisata/:id', loadChildren: './desawisata/desawisata.module#DesawisataPageModule' },
  { path: 'list-travel', loadChildren: './travel/travel.module#TravelPageModule' },
  { path: 'list-cinderamata', loadChildren: './cinderamata/cinderamata.module#CinderamataPageModule' },
  { path: 'detail-restoran/:id', loadChildren: './detailrestoran/detailrestoran.module#DetailrestoranPageModule' },
  { path: 'modal-hotel', loadChildren: './modal-filter/modal-hotel/modal-hotel.module#ModalHotelPageModule' },
  { path: 'modal-objek-wisata', loadChildren: './modal-filter/modal-objek-wisata/modal-objek-wisata.module#ModalObjekWisataPageModule' },
  { path: 'modal-tempat-ibadah', loadChildren: './modal-filter/modal-tempat-ibadah/modal-tempat-ibadah.module#ModalTempatIbadahPageModule' },
  { path: 'modal-restaurant', loadChildren: './modal-filter/modal-restaurant/modal-restaurant.module#ModalRestaurantPageModule' },
  { path: 'modal-event', loadChildren: './modal-filter/modal-event/modal-event.module#ModalEventPageModule' },
  { path: 'list-kuliner', loadChildren: './list-kuliner/list-kuliner.module#ListKulinerPageModule' },
  { path: 'detail-event/:id', loadChildren: './detail-event/detail-event.module#DetailEventPageModule' },
  { path: 'detail-desa/:id', loadChildren: './detail-desa/detail-desa.module#DetailDesaPageModule' },
  { path: 'detail-travel/:id', loadChildren: './detail-travel/detail-travel.module#DetailTravelPageModule' },
  { path: 'detail-cinderamata/:id', loadChildren: './detail-cinderamata/detail-cinderamata.module#DetailCinderamataPageModule' },
  { path: 'detail-kuliner/:id', loadChildren: './detail-kuliner/detail-kuliner.module#DetailKulinerPageModule' },
  { path: 'detail-ekraf/:id', loadChildren: './detail-ekraf/detail-ekraf.module#DetailEkrafPageModule' },
  { path: 'detail-berita/:id', loadChildren: './detail-berita/detail-berita.module#DetailBeritaPageModule' },
  { path: 'pencarian', loadChildren: './pencarian/pencarian.module#PencarianPageModule' },
  { path: 'jeniswisata', loadChildren: './jeniswisata/jeniswisata.module#JeniswisataPageModule' },
  { path: 'wisataperkab/:id', loadChildren: './wisataperkab/wisataperkab.module#WisataperkabPageModule' },
  { path: 'wisatajenis/:id/:jenis', loadChildren: './wisatajenis/wisatajenis.module#WisatajenisPageModule' },
  { path: 'detailsingleekraf/:id', loadChildren: './detailsingleekraf/detailsingleekraf.module#DetailsingleekrafPageModule' },
  { path: 'tutup', loadChildren: './tutup/tutup.module#TutupPageModule' },
  { path: 'hotel', loadChildren: './kab/hotel/hotel.module#HotelPageModule' },
  { path: 'tempat-ibadah', loadChildren: './kab/tempat-ibadah/tempat-ibadah.module#TempatIbadahPageModule' },
  { path: 'restaurant', loadChildren: './kab/restaurant/restaurant.module#RestaurantPageModule' },
  { path: 'desa-wisata', loadChildren: './kab/desa-wisata/desa-wisata.module#DesaWisataPageModule' },
  { path: 'oleh-oleh', loadChildren: './kab/oleh-oleh/oleh-oleh.module#OlehOlehPageModule' },
  { path: 'list-ekraf/:id', loadChildren: './list-ekraf/list-ekraf.module#ListEkrafPageModule' }








];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}


