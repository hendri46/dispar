import { Component, Input, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { LoadingController } from '@ionic/angular';
import { IonRouterOutlet, Platform, AlertController } from '@ionic/angular';
import { Nav } from 'ionic-angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public counter=0;

  rootPage:any = HomePage;
  slidePromo = {
    initialSlide: 0,
    spaceBetween: 10,
    slidesPerView: 1,
    speed:600,
    autoplay:true
   };

   slideDestinasi = {
    initialSlide: 0,
    spaceBetween: 10,
    slidesPerView: 1,
    speed:600,
    autoplay:true
   };

   slideEvent = {
    initialSlide: 0,
    spaceBetween: 10,
    slidesPerView: 1,
    speed:600,
    autoplay:false
   };
  //  VARIABLE
   public status: any = [];
   public objek_wisata_pilihan: any = [];
   public list_objek_wisata: any = [];
   public iklan: any = [];
   public berita: any = [];
   public event: any = [];
   loading=false;
   public subscribe:any;
   public path:any = [];
   @ViewChild(Nav) nav: Nav;
  constructor(
    public menu: MenuController,
    private http: HttpClient,
    public serviceComponent: AppComponent,
    public loadingController: LoadingController,
    private alertCtrl: AlertController,
    private platform: Platform,

    ) {

  }

  ngOnInit(){
      // this.storage.get('favorit').then((value)=>{
  //   if(value==null){
  //     this.Favorite=value;
  //   }else if(Object.keys(value).length==0){
  //     value=null;
  //     this.Favorite=value;
  //   } else{
  //     this.Favorite=value;
  //   }
    
  // });
    this.getHome();
  }

  
  
  getInstagram(){
    window.open('https://www.instagram.com/pariwisata.riau/', '_system');
  
  }
  getFacebook(){
    window.open('https://www.facebook.com/DinasPariwisataRiau', '_system');
  
  }
  getYoutube(){
    window.open('https://www.youtube.com/channel/UCCX1uvmHeAEqGrjtHcZsdIg', '_system');
  }

  async dismiss() {
    this.loading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }
  getPromosi(url){
    // console.log(url);
    window.open(url, '_system');

  }
  getHome(){

    let headers = new HttpHeaders({});
    let requestOptions = {
      headers: headers
    }
    let postData = {
      key:'pariwisata_riau',
    }
    this.http.post(this.serviceComponent.webservice()+'get-home',postData,requestOptions).subscribe(async data => { 
      this.path=this.serviceComponent.path();
      this.status=data['response']['status'];
      this.objek_wisata_pilihan=data['response']['objek_wisata_pilihan'];
      this.list_objek_wisata=data['response']['list_objek_wisata'];
      this.iklan=data['response']['iklan'];
      this.berita=data['response']['berita']['data'];
      this.event=data['response']['event']['data'];
      console.log(data['response']['berita']['data']);
      this.dismiss();
    });
  }

  ionViewDidEnter(){
    //   this.subscribe = this.platform.backButton.subscribe(()=>{
    //     if(this.constructor.name=="HomePage" && this.counter==0)
    //     {
    //       navigator["app"].exitApp();
    //     }
    // });
  }
  ionViewWillLeave(){
    // this.subscribe.unsubscribe();
  }

  async presentAlertConfirm() {
    let alert = await this.alertCtrl.create({
      header: 'Terima Kasih !!',
      message: 'Terima Kasih Telah menggunakan Aplikasi ini, Beri bintang 5 dengan klik : <strong>RATE APPS</strong> dan klik <strong>KELUAR</strong> untuk keluar dari aplikasi ini',
      cssClass: 'pop-style',
      buttons: [
        {
          text: 'Rate Apps',
          cssClass: 'secondary',
          handler: (blah) => {
            window.open('https://play.google.com/store/apps/details?id=com.jemari.provinsiriau', '_system');
          }   
        }, {
          text: 'Keluar',
          handler: () => {
            navigator["app"].exitApp();
          }
        }
      ]
    });
    await alert.present();
  }
}
