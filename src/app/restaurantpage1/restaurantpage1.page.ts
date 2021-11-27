import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ToastController, ModalController } from '@ionic/angular';
import { GooglemapPage } from '../googlemap/googlemap.page';
import {RestaurantDataService} from '../../app/restaurant-data.service';

@Component({
  selector: 'app-restaurantpage1',
  templateUrl: './restaurantpage1.page.html',
  styleUrls: ['./restaurantpage1.page.scss'],
})
export class Restaurantpage1Page implements OnInit {
  public restaurants: any;
  public categories: any;



  slideOpts = {
    speed: 600,
   // parallax: true,
   // effect: 'fade' /* flip */,
//    initialSlide: 1,
//    slidesPerView: 1,
    autoplay: false
//    spaceBetween: 100,
//    slidesPerColumn: 1,
//    slidesPerGroup: 1
//    watchSlidesProgress: true,
 //   virtualTranslate: true
  };

constructor(
  public toastController: ToastController,
  public rData: RestaurantDataService,
  public actionSheetCtrl: ActionSheetController,
  public modalController: ModalController) {

    this.loadRestaurants();


    this.categories = [
      {
        name: 'Mediterranean Cuisine',
        count: '12',
        routerLink: '/menuselect'
      },
      {
        name: 'Italian Cuisine',
        count: '4',
        routerLink: '/menuselect'
      },
      {
        name: 'Pizzas',
        count: '8',
        routerLink: '/menuselect'
      },
      {
        name: 'Grids',
        count: '18',
        routerLink: '/menuselect'
      },
      {
        name: 'Salads',
        count: '26',
        routerLink: '/menuselect'
      },
      {
        name: 'Fishes',
        count: '16',
        routerLink: '/menuselect'
      },
      {
        name: 'Burgers',
        count: '3',
        routerLink: '/menuselect'
      },
      {
        name: 'Pastas',
        count: '8',
        routerLink: '/menuselect'
      },
      {
        name: 'Drinks',
        count: '12',
        routerLink: '/menuselect'
      },
    ];

  }


async presentModal() {
  const modal = await this.modalController.create({
    component: GooglemapPage
  });
  return await modal.present();
}


  loadRestaurants() {
    this.rData.getData().subscribe(get => this.restaurants = get);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'The restaurant has been added to your favorites.',
      duration: 3000,
      cssClass: 'dark-toast',
    });
    toast.present();
  }


  async openShareaction() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'SHARED',
      cssClass: 'share-buttons',
      buttons: [
        {role: 'destructive'},
        {role: 'destructive'},
        {role: 'destructive'},
        {role: 'destructive'},
        {role: 'destructive'},
        {role: 'destructive'},
        {role: 'destructive'}
      ]
    });
    actionSheet.present();
  }

  ngOnInit() {
  }


}
