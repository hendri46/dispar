import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { LoadingController } from '@ionic/angular';
import { IonRouterOutlet, Platform, AlertController } from '@ionic/angular';
import { ModalHotelPage } from '../modal-filter/modal-hotel/modal-hotel.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-listhotel',
  templateUrl: './listhotel.page.html',
  styleUrls: ['./listhotel.page.scss'],
})
export class ListhotelPage implements OnInit {
  public itemsHotel: any = [];
  public path:any = [];
  public next:any=1;
  keyword :string='';
  selectKabupaten:any;
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
    public loadingCtrl:LoadingController,
    public geolocation:Geolocation,
    private route: ActivatedRoute
  ) 
  {
    this.selectKabupaten = this.route.snapshot.paramMap.get('id');
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
        sort:this.lokasi,
        latitude:this.latitude,
        longitude:this.longitude,
        // jenis:this.jenis
      }
  
      var url = this.serviceComponent.webservice()+'get-hotel';
      this.http.post(url,postData,requestOptions).subscribe((data) => 
      {
        this.path = this.serviceComponent.path();
        this.itemsHotel = data['response']['items']['data'];
        },error => {
          alert('Please check your connection')
        });

    }

  }

  ngOnInit() {
    this.path = this.serviceComponent.path();
    this.getLocation();
    this.selectKabupaten = this.route.snapshot.paramMap.get('id');
    this.getData(this.keyword,this.selectKabupaten,this.lokasi,this.latitude,this.longitude);
  }

  getLocation()
  {
    this.geolocation.getCurrentPosition().then((loc) => 
    {
      this.latitude = loc.coords.latitude;
      this.longitude = loc.coords.longitude;
    })
  }

   async getData(keyword,kabupaten,lokasi,lat,long)
   {
    const id = this.route.snapshot.paramMap.get('id');
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
        sort:lokasi,
        kabupaten_id:kabupaten,
        keyword:keyword,
        latitude:lat,
        longitude:long
      }

      var url = this.serviceComponent.webservice()+'get-hotel';
      this.http.post(url,postData,requestOptions).subscribe((data) => {
        loading.dismiss()
        this.itemsHotel = data['response']['items']['data'];
      }, error => {
        loading.dismiss()
        alert('Please check your connection')
      });
   }

   refresh(event) {
    setTimeout(() => {
      event.target.complete();
      this.itemsHotel=[];
      this.getData(this.keyword,this.selectKabupaten,this.lokasi,this.latitude,this.longitude);
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
        var url=this.serviceComponent.webservice()+'get-hotel?page='+this.next;
        this.http.post(url,postData,requestOptions).subscribe((data) => {
          this.path = this.serviceComponent.path();
          this.itemsHotel = this.itemsHotel.concat(data['response']['items']['data']);
      });
    }, 500);
  }

  

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalHotelPage,
      componentProps: { keyword: this.keyword,selectKabupaten:this.selectKabupaten,lokasi:this.lokasi }
    });

    modal.onDidDismiss().then((data) => {
      this.selectKabupaten = data['data']['kabupaten'];
      this.keyword = data['data']['keyword'];
      this.lokasi = data['data']['lokasi'];
      console.log(data);
      this.getData(this.keyword,this.selectKabupaten,this.lokasi,this.latitude,this.longitude);
    })

    modal.present();
  }

}
