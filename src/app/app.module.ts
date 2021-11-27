import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalPage } from './modal/modal.page';
import { GooglemapPage } from './googlemap/googlemap.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressaddPage } from './addressadd/addressadd.page';
import { HttpClientModule } from '@angular/common/http';

import { TapticEngine } from '@ionic-native/taptic-engine/ngx';
import {NgPipesModule } from 'ngx-pipes';
import { OrderModule } from 'ngx-order-pipe';
import { IonicRatingModule } from 'ionic4-rating';
import { OrderreviewPage } from './orderreview/orderreview.page';
import { CouponsPage } from './coupons/coupons.page';
import { InvitePage } from './invite/invite.page';
import { EditprofilePage } from './editprofile/editprofile.page';
import { CartPage } from './cart/cart.page';
import { CheckoutPage } from './checkout/checkout.page';
import { PrivacyPage } from './privacy/privacy.page';
import { AddcartPage } from './addcart/addcart.page';
import { BrMaskerModule } from 'br-mask';
import { MyordersPage } from './myorders/myorders.page';
import { SupportPage } from './support/support.page';
import { Network } from '@ionic-native/network/ngx';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ModalObjekWisataPage } from './modal-filter/modal-objek-wisata/modal-objek-wisata.page';
import { ModalHotelPage } from './modal-filter/modal-hotel/modal-hotel.page';
import { ModalTempatIbadahPage } from './modal-filter/modal-tempat-ibadah/modal-tempat-ibadah.page';
import { ModalRestaurantPage } from './modal-filter/modal-restaurant/modal-restaurant.page';
import { ModalRestaurantPageModule } from './modal-filter/modal-restaurant/modal-restaurant.module';
import { ModalEventPage } from './modal-filter/modal-event/modal-event.page';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    AppComponent,
    ModalPage,
    OrderreviewPage,
    CouponsPage,
    EditprofilePage,
    GooglemapPage,
    InvitePage,
    AddressaddPage,
    CartPage,
    CheckoutPage,
    PrivacyPage,
    AddcartPage,
    MyordersPage,
    SupportPage,
    ModalObjekWisataPage,
    ModalHotelPage,
    ModalTempatIbadahPage,
    ModalRestaurantPage,
    ModalEventPage
  ],
  entryComponents: [
    ModalPage,
    OrderreviewPage,
    CouponsPage,
    EditprofilePage,
    GooglemapPage,
    InvitePage,
    AddressaddPage,
    CartPage,
    CheckoutPage,
    PrivacyPage,
    AddcartPage,
    MyordersPage,
    SupportPage,
    ModalObjekWisataPage,
    ModalHotelPage,
    ModalTempatIbadahPage,
    ModalRestaurantPage,
    ModalEventPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgPipesModule,
    OrderModule,
    IonicRatingModule,
    BrMaskerModule,
    IonicStorageModule.forRoot(),
  ],
  providers: [
    StatusBar,
    TapticEngine,
    SplashScreen,
    LaunchNavigator,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Network
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule {}
