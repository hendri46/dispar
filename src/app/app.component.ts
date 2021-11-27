import { Component } from '@angular/core';
import { Platform, Events, AlertController} from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { async } from '@angular/core/testing';
import { ModalPage } from './modal/modal.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Auth',
      url: '/auth',
      icon: 'list'
    },
    {
      title: 'Register',
      url: '/register',
      icon: 'list'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'list'
    }
  ];
  link_ps:any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private network: Network,
    private events: Events,
    private alertController: AlertController,
    private geolocation:Geolocation,
  ) {
    this.initializeApp();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      const disconnectSubscription = this.network.onDisconnect().subscribe(() => {
        console.log('network was disconnected :-(');
        this.events.publish('onlineStatus', '0');
      });


      const connectSubscription = this.network.onConnect().subscribe(() => {
        console.log('network connected!');
        this.events.publish('onlineStatus', '1');
      });


      this.events.subscribe('onlineStatus', async (s) => {
        let alert;
        if (s === '0') {
          alert = await this.alertController.create({
            backdropDismiss: false,
            keyboardClose: false,
            header: 'Peringatan !',
            subHeader: 'Tidak ada jaringan',
            message: 'Periksa jaringan internet anda!'
          });
          await alert.present();

        } else if (s === '1') {
          await this.alertController.dismiss();
        }
      });


    });
  }

  webservice()
  {
    return 'https://jemari.riau.go.id/api/';
  }

  path()
  {
    return  {
      wisata: 'https://jemari.riau.go.id/public/uploads/images/gambar-header-objek-wisata/',
      berita: 'https://jemari.riau.go.id/public/uploads/images/gambar-berita/',
      iklan: 'https://jemari.riau.go.id/public/uploads/images/iklan/',
      event: 'https://jemari.riau.go.id/public/uploads/images/gambar-header-event/',
      hotel: 'https://jemari.riau.go.id/public/uploads/images/gambar-header-hotel/',
      tempatibadah: 'https://jemari.riau.go.id/public/uploads/images/gambar-header-tempat-ibadah/',
      restoran: 'https://jemari.riau.go.id/public/uploads/images/gambar-header-restaurant/',
      galleryobjekwisata: 'https://jemari.riau.go.id/public/uploads/images/gallery-objek-wisata/',
      galleryobjekhotel: 'https://jemari.riau.go.id/public/uploads/images/gallery-hotel/',
      galleryobjektempatibadah: 'https://jemari.riau.go.id/public/uploads/images/gambar-header-tempat-ibadah/',
      cindra: 'https://jemari.riau.go.id/public/uploads/images/gambar-header-cindramata/',
      galleryrestoran: 'https://jemari.riau.go.id/public/uploads/images/gallery-restaurant/',
      desa: 'https://jemari.riau.go.id/public/uploads/images/gambar-header-desa-wisata/',
      kuliner: 'https://jemari.riau.go.id/public/uploads/images/gambar-kuliner/',
      travel: 'https://jemari.riau.go.id/public/uploads/images/gambar-travel/',
      ekraf: 'https://jemari.riau.go.id/public/uploads/images/kategori-ekraf/',
      produk_cindra: 'https://jemari.riau.go.id/public/uploads/images/produk-cindramata/',
      menu: 'https://jemari.riau.go.id/public/uploads/images/restaurant-menu/',
      slide: 'https://jemari.riau.go.id/public/uploads/images/setting/',
      gambar_event: 'https://jemari.riau.go.id/public/uploads/images/gallery-event/',
      gambar_kuline: 'https://jemari.riau.go.id/public/uploads/images/gallery-kuliner/',
      gambar_cindra: 'https://jemari.riau.go.id/public/uploads/images/gallery-cindramata/',
      kabupaten: 'https://jemari.riau.go.id/public/uploads/images/foto-kabupaten/',
    }
  }

  linkPS()
  {
    return 'http://localhost/project/pariwisata/public/api/';
  }

  




}
