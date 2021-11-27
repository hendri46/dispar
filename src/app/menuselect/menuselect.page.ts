import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ModalController, ActionSheetController, AlertController } from '@ionic/angular';
import { CartPage } from '../cart/cart.page';


@Component({
  selector: 'app-menuselect',
  templateUrl: './menuselect.page.html',
  styleUrls: ['./menuselect.page.scss'],
})


export class MenuselectPage implements OnInit {
  // menus: any;
  // menusInCart: any;
  // cartBadgeState = 'idle';
  // tslint:disable-next-line:ban-types
menus: any;
// tslint:disable-next-line:ban-types
menusInCart = [];
// tslint:disable-next-line:no-inferrable-types
cartBadgeState: string = 'idle';

  public form = [
    { val: 'Mayonnaise', price: 'FREE', isChecked: true },
    { val: 'Ketchup', price: '(0,5 €)', isChecked: false },
    { val: 'Sauces', price: '(1 €)', isChecked: false }
  ];
  status = true;

  toogleSection(i) {
    // this.status = !this.status;
   this.menus[i].open = !this.menus[i].open;
  }


  constructor( public modalCtrl: ModalController, private changeDetector: ChangeDetectorRef) {
    this.menus = [
      {
        addButtonState: 'idle',
        quantityInCart: 0,
        name: 'Palak Paneer',
        desc: 'Homemade fresh cheese with spinach fried in various spices.',
        allergens: 'A, B, D, E, H',
        sub_content: [
          'Coconut',
          'Mohakhali DOHS'
        ],
        meal_type: 'Indian - Vegeterian dishes ',
        price: '12,90 €',
        ex_price: ''
      },
      {
        addButtonState: 'idle',
        quantityInCart: 0,
        name: 'Cheesy Meesy Burger',
        desc: 'Chicken Livers Topped with PERi-PERi Sauce, Served with A Roll To Soak Up The Sauce',
        allergens: 'A, D',
        sub_content: [
          'Mirpur DOHS'
        ],
        meal_type: 'Indian',
        price: '9,90 €',
        ex_price: '14,90 €'
      },
      {
        addButtonState: 'idle',
        quantityInCart: 0,
        name: 'Appeteaser Platter',
        desc: 'Co-Starring Garlic, Pepper and Chili',
        allergens: 'B, D, H',
        sub_content: [
          'Mohakhali DOHS',
          'Green salad'
        ],
        meal_type: 'Fast Food',
        price: '14,90 €',
        ex_price: '17,90 €'
      },
      {
        addButtonState: 'idle',
        quantityInCart: 0,
        name: 'All Together Now (V)',
        desc: 'Pour Smoky PERi-PERi Oil Over Creamy Hummus and Dig in with Strips Of Warm Pita',
        allergens: 'A, B',
        sub_content: [
          'Avocado',
          'Baridhara',
          'Green salad'
        ],
        meal_type: 'Indian - Vegeterian dishes ',
        price: '16,90 €',
        ex_price: '22,90 €'
      },
      {
        addButtonState: 'idle',
        quantityInCart: 0,
        name: 'Fino sides',
        desc: 'Dive Into Temping Roasted Red Pepper and Chili Spice Dip with Warm Pita Strips',
        allergens: 'A, E, H',
        sub_content: [
          'Mirpur DOHS',
          'Baridhara',
        ],
        meal_type: 'Fast Food',
        price: '18,90 €',
        ex_price: '24,90 €'
      },
      {
        addButtonState: 'idle',
        quantityInCart: 0,
        name: 'Corn-On-The-Cob',
        desc: 'Choose any Three Appeteasers',
        allergens: 'E, H',
        sub_content: [
        ],
        meal_type: 'Fast Food',
        price: '11,90 €',
        ex_price: '14,90 €'
      }
    ];
  }

  ngOnInit() {
    // this.menus = this.cartService.getProducts();

  }

  addToCart(menu) {
    this.menusInCart.push(menu);
    menu.addButtonState = 'adding';
    this.cartBadgeState = 'adding';
    this.changeDetector.detectChanges();
  }
  addToCartFinished(menu) {
    this.cartBadgeState = 'idle';
    menu.addButtonState = 'idle';
  }



  async opencartPage() {
    const modal = await this.modalCtrl.create({
      component: CartPage
    });
    modal.present();

  }

}
