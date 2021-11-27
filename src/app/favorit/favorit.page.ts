import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-favorit',
  templateUrl: './favorit.page.html',
  styleUrls: ['./favorit.page.scss'],
})
export class FavoritPage implements OnInit {
  objekWisata:any=[];
  hotel:any=[];
  tempatibadah:any=[];
  event:any=[];
  resto:any=[];
  cendramata:any=[];
  kuliner:any=[];
  public path:any = [];
  constructor(
    private storage: Storage,
    public serviceComponent: AppComponent
  ) { }

  ngOnInit() {
    this.path=this.serviceComponent.path();
  }

  ionViewWillEnter()
  {
    this.getObjekWisata();
    this.gethotel();
    this.getIbadah();
    this.getEvent();
    this.getResto();
    this.getCendramata();
    this.getKuliner();
  }

  getObjekWisata()
  {
    return new Promise((resolve) => {
      this.storage.get('fav_objek').then((data)=>{
        this.objekWisata = data
      })
      resolve(true);
    });
  }

  gethotel()
  {
    return new Promise((resolve) => {
      this.storage.get('fav_hotel').then((data)=>{
        this.hotel = data
      })
      resolve(true);
    });
  }

  getIbadah()
  {
    return new Promise((resolve) => {
      this.storage.get('fav_ibadah').then((data)=>{
        this.tempatibadah = data
      })
      resolve(true);
    });
  }

  getCendramata()
  {
    return new Promise((resolve) => {
      this.storage.get('fav_cendramata').then((data)=>{
        this.cendramata = data
      })
      resolve(true);
    });
  }

  getKuliner()
  {
    return new Promise((resolve) => {
      this.storage.get('fav_kuliner').then((data)=>{
        this.kuliner = data;
        console.log(data);
      })
      resolve(true);
    });
  }

  getEvent()
  {
    return new Promise((resolve) => {
      this.storage.get('fav_event').then((data)=>{
        this.event = data
      })
      resolve(true);
    });
  }

  getResto()
  {
    return new Promise((resolve) => {
      this.storage.get('fav_resto').then((data)=>{
        this.resto = data
      })
      resolve(true);
    });
  }

}
