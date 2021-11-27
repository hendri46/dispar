
import { Component, Input,ViewChild,OnInit  } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { LoadingController,ToastController,ActionSheetController,ModalController} from '@ionic/angular';
import { Platform, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ModalHotelPage } from '../modal-filter/modal-hotel/modal-hotel.page';
import { Storage } from '@ionic/storage'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { exit } from 'process';

declare var google;
@Component({
  selector: 'app-detailwisata',
  templateUrl: './detailwisata.page.html',
  styleUrls: ['./detailwisata.page.scss'],
})

export class DetailwisataPage implements OnInit {
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
  cek_like:any;
  id_detail:any;
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
    
    this.checkFav();
  }

  refresh(event)
  {
    this.getPage();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
  getVideoContent(video){
    console.log(video);
    return this.sanitizer.bypassSecurityTrustResourceUrl(video);
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
      objek_wisata_id:id,
      latitude:this.latitude,
      longitude:this.longitude
    }
    this.http.post(this.serviceComponent.webservice()+'get-objek-wisata/detail',postData,requestOptions).subscribe(async data => { 
      loading.dismiss();
      this.path=this.serviceComponent.path();
      this.status=data['response']['status'];
      this.detail=data['response']['detail'];
      this.video=this.sanitizer.bypassSecurityTrustResourceUrl(data['response']['detail']['video']);
      this.aksebilitas=data['response']['aksebilitas']['0'];
      this.plus=data['response']['plus'];
      this.restoterdekat=data['response']['restoterdekat'];
      this.ibadahterdekat=data['response']['ibadahterdekat'];
      this.hotelterdekat=data['response']['hotelterdekat'];
      this.cindraterdekat=data['response']['cindraterdekat'];
      this.galeri=data['response']['galeri'];
      this.jenis=data['response']['jenis'];
      this.like=data['response']['like'];
      this.fasilitas=data['response']['fasilitas']['0'];
      this.ulasan=data['response']['ulasan'];
      this.pengunjung=data['response']['pengunjung'];
      this.pemandu=data['response']['pemandu'];
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
    this.storage.get('fav_objek')
    .then((data)=>{
      if(data == null){
        data = [];
      }
      data.push(item); return data;
    })
    .then((fav)=>{
      this.storage.set('fav_objek',fav);
    })
    const toast = await this.toastController.create({
      message: 'Objek wisata telah ditambahkan ke favorit Anda.',
      duration: 3000,
      cssClass: 'dark-toast',
    });
    toast.present();
  }

  async getLike(id){
    
    let id_objek = this.route.snapshot.paramMap.get('id');
    this.storage.get('objek_like').then((value)=>{
      if(value !== null)
      {
        for (let i of value) {
          if (i.id == id_objek) {
            return this.cek_like = true
          }
        } 
      }
    })

    if(!this.cek_like)
    {
      this.cek_like = true;
      this.storage.get('objek_like')
      .then((data)=>{
        if(data == null){
          data = [];
        }
        data.push(this.detail); return data;
      })
      .then((fav)=>{
        this.storage.set('objek_like',fav);
      })

      let headers = new HttpHeaders({});
      headers.append('Content-Type', 'application/x-www-form-urlencoded' );
      let requestOptions = {
        headers: headers
      }
      let postData = {
        key:'pariwisata_riau',
        objek_wisata_id:id,
      }
      this.http.post(this.serviceComponent.webservice()+'get-objek-wisata/like',postData,requestOptions).subscribe(async data => { 
        const id = this.route.snapshot.paramMap.get('id');
        let headers = new HttpHeaders({});
        headers.append('Content-Type', 'application/x-www-form-urlencoded' );
        let requestOptions = {
          headers: headers
        }
        let postData = {
          key:'pariwisata_riau',
          objek_wisata_id:id,
          latitude:this.latitude,
          longitude:this.longitude
        }
        this.http.post(this.serviceComponent.webservice()+'get-objek-wisata/detail',postData,requestOptions).subscribe(async data => { 
          this.path=this.serviceComponent.path();
          this.status=data['response']['status'];
          this.detail=data['response']['detail'];
          this.video=this.sanitizer.bypassSecurityTrustResourceUrl(data['response']['detail']['video']);
          this.aksebilitas=data['response']['aksebilitas']['0'];
          this.plus=data['response']['plus'];
          this.restoterdekat=data['response']['restoterdekat'];
          this.ibadahterdekat=data['response']['ibadahterdekat'];
          this.hotelterdekat=data['response']['hotelterdekat'];
          this.cindraterdekat=data['response']['cindraterdekat'];
          this.galeri=data['response']['galeri'];
          this.jenis=data['response']['jenis'];
          this.like=data['response']['like'];
          this.fasilitas=data['response']['fasilitas']['0'];
          this.ulasan=data['response']['ulasan'];
          this.pengunjung=data['response']['pengunjung'];
          this.pemandu=data['response']['pemandu'];
          console.log(data['response']);
          let center = new google.maps.LatLng(data['response']['detail']['latitude'],data['response']['detail']['longitude']);
          this.fullmap = new google.maps.Map(
            this.mapElement.nativeElement,
            {
              center: center,
              zoom: 15
            });
            const toast = await this.toastController.create({
              message: 'Anda Menyukai Objek wisata Ini.',
              duration: 3000,
              cssClass: 'dark-toast',
            });
            toast.present();
        }, async error => {
            const toast = await this.toastController.create({
              cssClass: 'my-custom-class',
              message: 'Maaf. ada kesalahan !',
              duration: 2000
            });
            toast.present();
          });


      }, async error => {
          const toast = await this.toastController.create({
            cssClass: 'my-custom-class',
            message: 'Maaf. ada kesalahan !',
            duration: 2000
          });
          toast.present();
        });
    }
    
  }
  async presentToastRemove(item) {
     this.storage.get('fav_objek').then((data) => {
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
      this.storage.set('fav_objek', toKeep);
    });
    this.fav = false
    const toast = await this.toastController.create({
      message: 'Objek wisata telah dihapus dari favorit Anda.',
      duration: 3000,
      cssClass: 'dark-toast',
    });
    toast.present();
  }

  checkFav()
  {
    let id = this.route.snapshot.paramMap.get('id');
    this.storage.get('fav_objek').then((value)=>{
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
    this.id_detail = this.route.snapshot.paramMap.get('id');
    const modal = await this.modalController.create({
      component: ModalHotelPage,
      // componentProps: { id: this.id_detail}
    });

    // modal.onDidDismiss().then((data) => {
    //   this.selectKabupaten = data['data']['kabupaten'];
    //   this.keyword = data['data']['keyword'];
    //   this.lokasi = data['data']['lokasi'];
    //   console.log(data);
    //   this.getData(this.keyword,this.selectKabupaten,this.lokasi,this.latitude,this.longitude);
    // })

    modal.onDidDismiss().then((data) => {
      console.log(data)
      let headers = new HttpHeaders({});
      headers.append('Content-Type', 'application/x-www-form-urlencoded' );
      let requestOptions = {
        headers: headers
      }
      let postData = {
        nama: data['data']['nama'],
        email: data['data']['email'],
        rating: data['data']['rating'],
        ulasan: data['data']['ulasan'],
        key:'pariwisata_riau',
        objek_wisata_id:this.route.snapshot.paramMap.get('id'),
        
      }
      this.http.post(this.serviceComponent.webservice()+'get-objek-wisata/ulasan',postData,requestOptions).subscribe(async data => { 
        const toast = await this.toastController.create({
          cssClass: 'my-custom-class',
          message: 'Ulasan anda sudah dikirimkan, dan akan di verifikasi admin terlebih dahulu !',
          duration: 2000
        });
        toast.present();
      });
    })

    modal.present();
  }
  
}
