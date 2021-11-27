import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavParams } from '@ionic/angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { LoadingController } from '@ionic/angular';
import { IonRouterOutlet, Platform, AlertController } from '@ionic/angular';
import { ModalObjekWisataPage } from '../modal-filter/modal-objek-wisata/modal-objek-wisata.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-listwisata',
  templateUrl: './listwisata.page.html',
  styleUrls: ['./listwisata.page.scss'],
})


export class ListwisataPage implements OnInit {
  public itemsWisata: any = [];
  public itemsKab: any = [];
  public path:any = [];
  public next:any=1;
  keyword :string='';
  selectKabupaten :0;
  lokasi :0;
  jenis:'';
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
    public loadingCtrl:LoadingController
  )
  {
    
  }

  ngOnInit() {
    this.getLocation();
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
  
  getPencarian(ev:any){
    var  val = ev.target.value;
    if (val && val.trim() != '') {
      let headers = new HttpHeaders({});
      let requestOptions = {
        headers: headers
      }
      this.next = 1 ;
      this.keyword = val;
      let postData = {
        key:"pariwisata_riau",
        keyword:val,
        sort:this.lokasi,
        latitude:this.latitude,
        longitude:this.longitude,
        jenis:this.jenis
      }
  
      var url = this.serviceComponent.webservice()+'get-objek-wisata';
      this.http.post(url,postData,requestOptions).subscribe((data) => 
      {
        this.path = this.serviceComponent.path();
        this.itemsWisata = data['response']['items']['data'];
        console.log(data['response']['items']);
        },error => {
          alert('Please check your connection')
        });

    }

  }
  async getData(keyword,kabupaten,lokasi,lat,long)
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
      sort:lokasi,
      latitude:lat,
      longitude:long,
      jenis:this.jenis
    }

    var url = this.serviceComponent.webservice()+'get-kabupaten';
    this.http.post(url,postData,requestOptions).subscribe((data) => 
    {
      loading.dismiss()
      this.path = this.serviceComponent.path();
      this.itemsKab = data['response']['items_kabupaten'];
      console.log(data['response']['items_kabupaten']);
      },error => {
        loading.dismiss()
        alert('Please check your connection')
      });
  }

  refresh(event) {
    setTimeout(() => {
      event.target.complete();
      this.itemsWisata = [];
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
          kabupaten_id:this.selectKabupaten,
          keyword:this.keyword,
          sort:this.lokasi,
          latitude:this.latitude,
          longitude:this.longitude,
          jenis:this.jenis
        }
        var url=this.serviceComponent.webservice()+'get-objek-wisata?page='+this.next;
        this.http.post(url,postData,requestOptions).subscribe((data) => {
        // this.itemsWisata=this.itemsWisata.concat(data);
        // console.log(this.itemsWisata.concat(data));
        this.path = this.serviceComponent.path();
        this.itemsWisata = this.itemsWisata.concat(data['response']['items']['data']);

      });
    }, 500);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalObjekWisataPage,
      componentProps: { keyword: this.keyword,selectKabupaten:this.selectKabupaten,lokasi:this.lokasi,jenis:this.jenis}
    });

    modal.onDidDismiss().then((data) => {
      this.selectKabupaten = data['data']['kabupaten'];
      this.keyword = data['data']['keyword'];
      this.lokasi = data['data']['lokasi'];
      this.jenis = data['data']['jenis'];
      this.getData(this.keyword,this.selectKabupaten,this.lokasi,this.latitude,this.longitude);
    })

    modal.present();
  }
  
}
