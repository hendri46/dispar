import { Component, Input,ViewChild,OnInit  } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { LoadingController,ToastController,ActionSheetController,ModalController} from '@ionic/angular';
import { Platform, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GooglemapPage } from '../googlemap/googlemap.page';
declare var google;
import { Storage } from '@ionic/storage'
@Component({
  selector: 'app-detailibadah',
  templateUrl: './detailibadah.page.html',
  styleUrls: ['./detailibadah.page.scss'],
})
export class DetailibadahPage implements OnInit {
  slideOpts = {
    speed: 600,
    autoplay: true
  };
  public detail: any = [];
  public path:any = [];
  public status:any = [];
  public terdekat:any = [];
  public galeri:any = [];
  public jenis:any = [];
  public menuibadah:any = [];
  public ulasan:any = [];
  public jarak:any = [];
  latitude:number ;
  longitude:number ;
  loading=false;
  fullmap;
  fav = false;
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
  ) { }


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
    this.checkFav();
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
      showBackdrop: false,
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
      tempat_ibadah_id:id,
      latitude:this.latitude,
      longitude:this.longitude
    }
    this.http.post(this.serviceComponent.webservice()+'get-tempat-ibadah/detail',postData,requestOptions).subscribe(async data => { 
      loading.dismiss();
      this.path=this.serviceComponent.path();
      this.status=data['response']['status'];
      this.detail=data['response']['detail'];
      this.terdekat=data['response']['terdekat'];
      this.galeri=data['response']['galeri'];
      this.jenis=data['response']['jenis'];
      this.ulasan=data['response']['ulasan'];
      this.menuibadah=data['response']['menu'];
      this.jarak=data['response']['jarak'];
      console.log(data['response']['jarak'])
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

  async presentToastSave(item) {
    this.fav = true
    this.storage.get('fav_ibadah')
    .then((data)=>{
      if(data == null){
        data = [];
      }
      data.push(item); return data;
    })
    .then((fav)=>{
      this.storage.set('fav_ibadah',fav);
    })
    const toast = await this.toastController.create({
      message: 'Tempat Ibadah telah ditambahkan ke favorit Anda.',
      duration: 3000,
      cssClass: 'dark-toast',
    });
    toast.present();
  }

  async presentToastRemove(item) {
    this.storage.get('fav_ibadah').then((data) => {
      if (!data || data.length === 0) {
        return null;
      }
      let toKeep: any= [];
      console.log(data);
      for (let i of data) {
        console.log(i);
        if (i.id !== item.id) {
          toKeep.push(i);
        }
      }
      this.storage.set('fav_ibadah', toKeep);
    });
    this.fav = false

    const toast = await this.toastController.create({
      message: 'Tempat Ibadah telah dihapus dari favorit Anda.',
      duration: 3000,
      cssClass: 'dark-toast',
    });
    toast.present();
  }

checkFav()
  {
    let id = this.route.snapshot.paramMap.get('id');
    this.storage.get('fav_ibadah').then((value)=>{
      if(value !== null)
      {
        for (let i of value) {
          if (i.id == id) {
            return this.fav = true
          }
        } 
      }
    })
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: GooglemapPage,
      componentProps: { keyword: '',selectKabupaten:0,lokasi:0 }

    });
    return await modal.present();
  }

}
