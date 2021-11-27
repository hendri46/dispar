import { Component, Input,ViewChild,OnInit  } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { LoadingController,ToastController,ActionSheetController,ModalController} from '@ionic/angular';
import { Platform, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { Storage } from '@ionic/storage'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { exit } from 'process';
declare var google;

@Component({
  selector: 'app-detailsingleekraf',
  templateUrl: './detailsingleekraf.page.html',
  styleUrls: ['./detailsingleekraf.page.scss'],
})
export class DetailsingleekrafPage implements OnInit {

  slideOpts = {
    speed: 600,
    autoplay: true
  };
  public detail: any = [];
  public path:any = [];
  public status:any = [];
  public aksebilitas:any = [];
  public plus:any = [];
  public restoterdekat:any = [];
  public ibadahterdekat:any = [];
  public hotelterdekat:any = [];
  public cindraterdekat:any = [];
  public galeri:any = [];
  public jenis:any = [];
  public fasilitas:any = [];
  public ulasan:any = [];
  public pengunjung:any = [];
  public pemandu:any = [];
  public like:any = [];
  public galerikuliner:any = [];
  
  video:any;
  latitude:number ;
  longitude:number ;
  loading=false;
  fullmap;
  fav = false;
  url;
  @ViewChild('mapElement') mapElement;
  constructor(
    public menu: MenuController,
    private http: HttpClient,
    public serviceComponent: AppComponent,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private platform: Platform,
    private route: ActivatedRoute,
    private launchNavigator: LaunchNavigator,
    private geolocation: Geolocation,
    public toastController: ToastController,
    public actionSheetCtrl: ActionSheetController,
    public modalController: ModalController,
    private storage:Storage,
    private sanitizer: DomSanitizer,
  ) { 
    this.sanitizer = sanitizer; 
  }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then(position =>{
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      },async error=>{
          const toast = await this.toastController.create({
            cssClass: 'dark-toast',
            message: 'Gagal mendapatkan titik koordinat Anda.',
            duration: 2000
          });
          toast.present();
      });
    this.getPage();
    
  }
  refresh(event)
  {
    this.getPage();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  async arah(latitude_wisata,longitude_wisata ){
    console.log(this.latitude);

      let destination = [latitude_wisata, longitude_wisata];
      let options: LaunchNavigatorOptions = {
        start:[this.latitude,this.longitude],
        app: this.launchNavigator.APP.GOOGLE_MAPS
      }
      this.launchNavigator.navigate(destination, options)
        .then(
          async success => {
          const toast = await this.toastController.create({
            cssClass: 'dark-toast',
            message: 'Anda akan diarahkan ke Maps !',
            duration: 2000
          });
          toast.present();},
          async error => {
            alert(error)
            const toast = await this.toastController.create({
              cssClass: 'dark-toast',
              message: 'Gagal mendapatkan rute !',
              duration: 2000
            });
            toast.present(); }
        );
  }

  async getPage(){
    let loading = await this.loadingCtrl.create({
      message: '<ion-img src="/assets/imgs/loading-oke.svg" alt="loading..."></ion-img>',
      cssClass: 'scale-down-center',
      translucent: true,
      showBackdrop: true,
      spinner: null,
      duration: 4000
    });
    await loading.present();
    const id = this.route.snapshot.paramMap.get('id');
    let headers = new HttpHeaders({});
    headers.append('Content-Type', 'application/x-www-form-urlencoded' );
    let requestOptions = {
      headers: headers
    }
    let postData = {
      key:'pariwisata_riau',
      ekraf_id:id,
      latitude:this.latitude,
      longitude:this.longitude
    }
    this.http.post(this.serviceComponent.webservice()+'get-ekraf/single',postData,requestOptions).subscribe(async data => { 
      loading.dismiss();
      this.path=this.serviceComponent.path();
      this.status=data['response']['status'];
      this.detail=data['response']['detail'];
      this.video=this.sanitizer.bypassSecurityTrustResourceUrl(data['response']['detail']['video']);
      this.galeri=data['response']['gallery_cindramata'];
      this.galerikuliner=data['response']['gallery_kuliner'];
      console.log(data['response']);
      let center = new google.maps.LatLng(data['response']['detail']['latitude'],data['response']['detail']['longitude']);
      this.fullmap = new google.maps.Map(
        this.mapElement.nativeElement,
        {
          center: center,
          zoom: 15
        });
    }, async error => {
        loading.dismiss()
        const toast = await this.toastController.create({
          cssClass: 'my-custom-class',
          message: 'Maaf. ada kesalahan !',
          duration: 2000
        });
        toast.present();
      });
  }

}
