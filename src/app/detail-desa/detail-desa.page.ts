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


@Component({
  selector: 'app-detail-desa',
  templateUrl: './detail-desa.page.html',
  styleUrls: ['./detail-desa.page.scss'],
})
export class DetailDesaPage implements OnInit {
  public detail: any = [];
  public path:any = [];
  public status:any = [];
  public terdekat:any = [];
  public sadarWisata:any = [];
  public jenis:any = [];
  public layanan:any = [];
  public ulasan:any = [];
  latitude:number ;
  longitude:number ;
  loading=false;
  fullmap;
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
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.getPage();
  }
  
  refresh(event)
  {
    this.getPage();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
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
      desa_wisata_id:id,
    }
    this.http.post(this.serviceComponent.webservice()+'get-desa-wisata/detail',postData,requestOptions).subscribe(async data => { 
      loading.dismiss();
      this.path=this.serviceComponent.path();
      this.detail=data['response']['detail'];
      this.terdekat=data['response']['terdekat'];
      this.sadarWisata=data['response']['sadar_wisata'];
      console.log(data['response']);
      
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

  async presentToastSave() {
    const toast = await this.toastController.create({
      message: 'Objek wisata telah ditambahkan ke favorit Anda.',
      duration: 3000,
      cssClass: 'dark-toast',
    });
    toast.present();
  }

  async presentToastRemove() {
    const toast = await this.toastController.create({
      message: 'Objek wisata telah dihapus dari favorit Anda.',
      duration: 3000,
      cssClass: 'dark-toast',
    });
    toast.present();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: GooglemapPage,
      componentProps: { keyword: '',selectKabupaten:0,lokasi:0 }

    });
    return await modal.present();
  }

}
