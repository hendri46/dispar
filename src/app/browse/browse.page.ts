import { Component, OnInit, Injectable, Pipe } from '@angular/core';
import { MenuController, ActionSheetController, ModalController, NavParams } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { TapticEngine } from '@ionic-native/taptic-engine/ngx';
import {RestaurantDataService} from '../../app/restaurant-data.service';
import {MealsTypeService} from '../../app/meals-type.service';
@Component({
  selector: 'app-browse',
  templateUrl: './browse.page.html',
  styleUrls: ['./browse.page.scss'],
})


export class BrowsePage implements OnInit {
  toggleValue: boolean;
  public restaurants;
  public meals;
  searchText = '';
  keyword :string='';
  selectKabupaten :0;
  lokasi :0;

  constructor(
    public menu: MenuController,
    private taptic: TapticEngine,
    public actionSheetController: ActionSheetController,
    public rData: RestaurantDataService,
    private mealService: MealsTypeService,
    public modalController: ModalController,
    private navParams: NavParams
    ) {
    this.menu.swipeEnable(false);
    this.menu.enable(false);
    this.loadRestaurants();
    this.loadMeals();
    this.selectKabupaten = this.navParams.get('selectKabupaten');
    this.lokasi = this.navParams.get('lokasi');
    console.log('fak');
        
  }


  ionViewCanEnter()
  {
    console.log('fak');
    
  }

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

  customActionSheetOptions: any = {
    header: 'SELECT SORT BY',
    cssClass: 'custom-action'
  };

  loadRestaurants() {
    this.rData.getData().subscribe(get => this.restaurants = get);
  }


  loadMeals() {
    this.mealService.getMeals().subscribe(get => this.meals = get);
  }


  clickEvent() {
    this.taptic.impact({
      style: 'heavy' // light | medium | heavy
    });
    console.log('Taptic: Heavy');

  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.complete();
    }, 2000);
  }


  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { keyword: '123',selectKabupaten:0,lokasi:0 }
    });

    modal.onDidDismiss().then((data) => {
      
    })

    modal.present();
    
    
  }





}
