import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { HttpClient } from '@angular/common/http';
import {RestaurantDataService} from '../../app/restaurant-data.service';
import {MealsTypeService} from '../../app/meals-type.service';
import { TapticEngine } from '@ionic-native/taptic-engine/ngx';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.page.html',
  styleUrls: ['./deals.page.scss'],
})
export class DealsPage implements OnInit {
  public restaurants;
  public meals;
  ngOnInit(): void {
  }

  constructor(
    public modalController: ModalController,
    public rData: RestaurantDataService,
    private taptic: TapticEngine,
    private mealService: MealsTypeService
    ) {
    this.loadRestaurants();
    this.loadMeals();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    modal.present();
  }


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

}

