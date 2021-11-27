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
import { ModalEventPage } from '../modal-filter/modal-event/modal-event.page';
@Component({
  selector: 'app-detail-ekraf',
  templateUrl: './detail-ekraf.page.html',
  styleUrls: ['./detail-ekraf.page.scss'],
})
export class DetailEkrafPage implements OnInit {
  public detail: any = [];
  public path:any = [];
  public status:any = [];
  public terdekat:any = [];
  public kategori:any = [];
  public jenis:any = [];
  public layanan:any = [];
  public ulasan:any = [];
  latitude:number ;
  longitude:number ;
  loading=false;
  fullmap;
  keyword :string='';
  selectKabupaten :0;
  lokasi :0;
  public next:any=1;
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
  getPencarian(ev:any){
    const id = this.route.snapshot.paramMap.get('id');
    var  val = ev.target.value;
    if (val && val.trim() != '') {
      let headers = new HttpHeaders({});
      let requestOptions = {
        headers: headers
      }
  
      let postData = {
        key:'pariwisata_riau',
        kategori_ekraf_id:id,
        kabupaten_id:this.selectKabupaten,
        keyword:val,
      }
  
      var url = this.serviceComponent.webservice()+'get-ekraf/detail';
      this.http.post(url,postData,requestOptions).subscribe((data) => 
      {
        this.path = this.serviceComponent.path();
        this.path=this.serviceComponent.path();
        this.detail=data['response']['detail']['data'];
        this.kategori=data['response']['kategori'];
        console.log(data['response']);
        },error => {
          alert('Please check your connection')
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
      kategori_ekraf_id:id,
      kabupaten_id:this.selectKabupaten,
      keyword:this.keyword,
    }
    this.http.post(this.serviceComponent.webservice()+'get-ekraf/detail',postData,requestOptions).subscribe(async data => { 
      loading.dismiss();
      this.path=this.serviceComponent.path();
      this.detail=data['response']['detail']['data'];
      this.kategori=data['response']['kategori'];
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

  loadData(event) {
    setTimeout(() => {
      event.target.complete();
      this.next++
      const id = this.route.snapshot.paramMap.get('id');
      let headers = new HttpHeaders({});
        let requestOptions = {
          headers: headers
        }
        let postData = {
          key:"pariwisata_riau",
          kategori_ekraf_id:id,
          kabupaten_id:this.selectKabupaten,
          keyword:this.keyword,
        }
        var url=this.serviceComponent.webservice()+'get-ekraf/detail?page='+this.next;
        this.http.post(url,postData,requestOptions).subscribe((data) => {
        if(data['response']['detail']['data'])
        {
          this.path = this.serviceComponent.path();
          this.detail = this.detail.concat(data['response']['detail']['data']);
        }
        
      });
    }, 500);
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
      component: ModalEventPage,
      componentProps: { keyword: this.keyword,selectKabupaten:this.selectKabupaten }
    });
    modal.onDidDismiss().then((data) => {
      this.selectKabupaten = data['data']['kabupaten'];
      this.keyword = data['data']['keyword'];
      this.getPage();
    })

    modal.present();
  }
}
