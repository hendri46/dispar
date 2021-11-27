import { Component, Input,ViewChild,OnInit  } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { LoadingController,ToastController,ActionSheetController,ModalController} from '@ionic/angular';
import { Platform, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Storage } from '@ionic/storage';

declare var google;


@Component({
  selector: 'app-detail-cinderamata',
  templateUrl: './detail-cinderamata.page.html',
  styleUrls: ['./detail-cinderamata.page.scss'],
})
export class DetailCinderamataPage implements OnInit {

  public detail: any = [];
  public path:any = [];
  public status:any = [];
  public terdekat:any = [];
  public produk:any = [];
  public jenis:any = [];
  public layanan:any = [];
  public ulasan:any = [];
  public gambar:any = [];
  public video:any = [];
  public penyedia:any = [];
  public like:any = [];
  public dilihat:any = [];
  cek_like:any;
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
  
  refresh(event)
  {
    this.getPage();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
  
  async getLike(id){
    let id_objek = this.route.snapshot.paramMap.get('id');
    this.storage.get('cendra_like').then((value)=>{
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
      this.storage.get('cendra_like')
      .then((data)=>{
        if(data == null){
          data = [];
        }
        data.push(this.detail); return data;
      })
      .then((fav)=>{
        this.storage.set('cendra_like',fav);
      })
      let headers = new HttpHeaders({});
      headers.append('Content-Type', 'application/x-www-form-urlencoded' );
      let requestOptions = {
        headers: headers
      }
      let postData = {
        key:'pariwisata_riau',
        cendramata_id:id,
      }
      this.http.post(this.serviceComponent.webservice()+'get-cendramata/like',postData,requestOptions).subscribe(async data => { 
        const id = this.route.snapshot.paramMap.get('id');
        let headers = new HttpHeaders({});
        headers.append('Content-Type', 'application/x-www-form-urlencoded' );
        let requestOptions = {
          headers: headers
        }
        let postData = {
          key:'pariwisata_riau',
          cendramata_id:id,
        }
        this.http.post(this.serviceComponent.webservice()+'get-cendramata/detail',postData,requestOptions).subscribe(async data => { 
          this.path=this.serviceComponent.path();
          this.detail=data['response']['detail'];
          this.terdekat=data['response']['terdekat'];
          this.penyedia=data['response']['penyedia'];
          this.produk=data['response']['produk'];
          this.gambar=data['response']['gambar'];
          this.like=data['response']['like'];
          this.dilihat=data['response']['dilihat'];
          // this.video=this.sanitizer.bypassSecurityTrustResourceUrl(decodeURIComponent(data['response']['video']));
          this.video=data['response']['video'];
          console.log(data['response']);
          let center = new google.maps.LatLng(data['response']['detail']['latitude'],data['response']['detail']['longitude']);
          this.fullmap = new google.maps.Map(
            this.mapElement.nativeElement,
            {
              center: center,
              zoom: 15
            });
            const toast = await this.toastController.create({
              message: 'Anda Menyukai Cendramata Ini.',
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
      cendramata_id:id,
    }
    this.http.post(this.serviceComponent.webservice()+'get-cendramata/detail',postData,requestOptions).subscribe(async data => { 
      loading.dismiss();
      this.path=this.serviceComponent.path();
      this.detail=data['response']['detail'];
      this.terdekat=data['response']['terdekat'];
      this.penyedia=data['response']['penyedia'];
      this.produk=data['response']['produk'];
      this.gambar=data['response']['gambar'];
      this.like=data['response']['like'];
      this.dilihat=data['response']['dilihat'];
      // this.video=this.sanitizer.bypassSecurityTrustResourceUrl(decodeURIComponent(data['response']['video']));
      this.video=data['response']['video'];
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
    this.storage.get('fav_cendramata')
    .then((data)=>{
      if(data == null){
        data = [];
      }
      data.push(item); return data;
    })
    .then((fav)=>{
      this.storage.set('fav_cendramata',fav);
    })
    const toast = await this.toastController.create({
      message: 'Cendramata telah ditambahkan ke favorit Anda.',
      duration: 3000,
      cssClass: 'dark-toast',
    });
    toast.present();
  }

  async presentToastRemove(item) {
    this.storage.get('fav_cendramata').then((data) => {
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
     this.storage.set('fav_cendramata', toKeep);
   });
   this.fav = false
   const toast = await this.toastController.create({
     message: 'Cendramata telah dihapus dari favorit Anda.',
     duration: 3000,
     cssClass: 'dark-toast',
   });
   toast.present();
 }

 checkFav()
 {
   let id = this.route.snapshot.paramMap.get('id');
   this.storage.get('fav_cendramata').then((value)=>{
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
      component: 'GooglemapPage',
      componentProps: { keyword: '',selectKabupaten:0,lokasi:0 }

    });
    return await modal.present();
  }

  slideOptions1 = {
    initialSlide: 0,
    slidesPerView: 3.7,
    slideShadows: true
  };
}
