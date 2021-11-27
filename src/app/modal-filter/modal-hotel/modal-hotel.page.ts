import { Component, OnInit, NgModule,Input  } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-modal-hotel',
  templateUrl: './modal-hotel.page.html',
  styleUrls: ['./modal-hotel.page.scss'],
})

@NgModule({
  imports: [
    FormsModule
  ]
})

export class ModalHotelPage implements OnInit {
  @Input('nama') nama;
  @Input('email') email;
  @Input('selectRating') selectRating;
  @Input('ulasan') ulasan;
  public path:any = [];
  public kabupaten:any = [];

  constructor( 
    private navParams: NavParams, 
    private modalCtrl: ModalController,
    private http: HttpClient,
    private router: Router
    ) 
    { 
    
    }

  customPopoverOptions: any = {
    cssClass: 'custom-popover'
  };

  knobValues: any = {
    upper: '45',
    lower: '10'
  };
  ngOnInit() {
  }
  async closeModal() {
    let data = {'nama':this.nama,'email':this.email,'rating':this.selectRating,'ulasan':this.ulasan}
    await this.modalCtrl.dismiss(data);
  }


}
