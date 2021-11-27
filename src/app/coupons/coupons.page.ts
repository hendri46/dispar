import { Component, OnInit } from '@angular/core';
import { LoadingController,ModalController, ActionSheetController, AlertController, MenuController, NavController, ToastController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
// import { AppComponent } from '../app.component';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.page.html',
  styleUrls: ['./coupons.page.scss'],
})

export class CouponsPage implements OnInit {
  public detail: any = [];

  private onaddCoupon: FormGroup;
  constructor(
    public alertController: AlertController,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    public toastController: ToastController,
    public menuCtrl: MenuController,
    private http: HttpClient,
    public loadingCtrl: LoadingController,
    // public serviceComponent: AppComponent,
    private fb: FormBuilder,
    public nav: NavController) {
    }

  ngOnInit() {
    this.getPage();
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
    let headers = new HttpHeaders({});
    headers.append('Content-Type', 'application/x-www-form-urlencoded' );
    let requestOptions = {
      headers: headers
    }
    let postData = {
      key:'pariwisata_riau',
    }
    this.http.post('https://jemari.riau.go.id/api/get-pengaturan',postData,requestOptions).subscribe(async data => { 
      loading.dismiss();
      this.detail=data['response']['setting_aplikasi'];
      console.log(data['response']['setting_aplikasi']);
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

  async closeModal() {
    await this.modalCtrl.dismiss();
  }
}
