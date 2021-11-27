import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { LoadingController } from '@ionic/angular';
import { IonRouterOutlet, Platform, AlertController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ModalEventPage } from '../modal-filter/modal-event/modal-event.page';

@Component({
  selector: 'app-list-kuliner',
  templateUrl: './list-kuliner.page.html',
  styleUrls: ['./list-kuliner.page.scss'],
})
export class ListKulinerPage implements OnInit {
  public itemsKuliner: any = [];
  public path:any = [];
  public next:any=1;
  keyword :string='';
  selectKabupaten :0;
  lokasi :0;
  latitude:any;
  longitude:any;

  constructor(
    public menu: MenuController,
    private http: HttpClient,
    public serviceComponent: AppComponent,
    public loadingController: LoadingController,
    private alertCtrl: AlertController,
    private platform: Platform,
    public modalController: ModalController,
    public geolocation:Geolocation,
    public loadingCtrl:LoadingController,
  ) { }

  

  ngOnInit() {
    this.getLocation();
    this.getData(this.keyword,this.selectKabupaten,this.latitude,this.longitude);
  }
  

  getLocation()
  {
    this.geolocation.getCurrentPosition().then((loc) => 
    {
      this.latitude = loc.coords.latitude;
      this.longitude = loc.coords.longitude;
    })
  }

  getPencarian(ev:any){
    var  val = ev.target.value;
    if (val && val.trim() != '') {
      let headers = new HttpHeaders({});
      let requestOptions = {
        headers: headers
      }
  
      let postData = {
        key:"pariwisata_riau",
        kabupaten_id:this.selectKabupaten,
        keyword:val,
        latitude:this.latitude,
        longitude:this.longitude,
      }
  
      var url = this.serviceComponent.webservice()+'get-kuliner';
      this.http.post(url,postData,requestOptions).subscribe((data) => 
      {
        this.path = this.serviceComponent.path();
        this.itemsKuliner = data['response']['items']['data'];
        },error => {
          alert('Please check your connection')
        });

    }

  }

  async getData(keyword,kabupaten,lat,long)
  {
    let loading = await this.loadingCtrl.create({
      message: '<ion-img src="/assets/imgs/loading-oke.svg" alt="loading..."></ion-img>',
      cssClass: 'scale-down-center',
      translucent: true,
      showBackdrop: true,
      spinner: null,
      duration: 4000
    });
    await loading.present();

    let headers = new HttpHeaders({});
    let requestOptions = {
      headers: headers
    }

    let postData = {
      key:"pariwisata_riau",
      kabupaten_id:kabupaten,
      keyword:keyword,
      latitude:lat,
      longitude:long
    }

    var url=this.serviceComponent.webservice()+'get-kuliner';
    this.http.post(url,postData,requestOptions).subscribe((data) => 
    {
      loading.dismiss()
      this.path=this.serviceComponent.path();
        this.itemsKuliner=data['response']['items']['data'];
    },error => {
      loading.dismiss()
      alert('Please check your connection')
    });
  }

   refresh(event) {
    setTimeout(() => {
      event.target.complete();
      this.getData(this.keyword,this.selectKabupaten,this.latitude,this.longitude);
    }, 500);
  }

  loadData(event) {
    setTimeout(() => {
      event.target.complete();
      this.next++
      let headers = new HttpHeaders({});
        let requestOptions = {
          headers: headers
        }
        let postData = {
          key:"pariwisata_riau",
          sort:this.lokasi,
          kabupaten_id:this.selectKabupaten,
          keyword:this.keyword,
          latitude:this.latitude,
          longitude:this.longitude,
        }
        var url=this.serviceComponent.webservice()+'get-kuliner?page='+this.next;
        this.http.post(url,postData,requestOptions).subscribe((data) => {
        // this.itemsKuliner=this.itemsKuliner.concat(data);
        this.path = this.serviceComponent.path();
        this.itemsKuliner = this.itemsKuliner.concat(data['response']['items']['data']);
      });
    }, 500);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalEventPage,
      componentProps: { keyword: this.keyword,selectKabupaten:this.selectKabupaten }
    });
    modal.onDidDismiss().then((data) => {
      this.selectKabupaten = data['data']['kabupaten'];
      this.keyword = data['data']['keyword'];
      this.getData(this.keyword,this.selectKabupaten,this.latitude,this.longitude);
    })

    modal.present();
  }

}
