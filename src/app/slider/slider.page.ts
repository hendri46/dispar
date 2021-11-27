import { Component, OnInit, ViewChild } from '@angular/core';
import {IonSlides} from '@ionic/angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
})

export class SliderPage implements OnInit {
  public slider: any = [];
  public path: any = [];

  @ViewChild(IonSlides) slides: IonSlides;
  

  slideOpts = {
    initialSlide: 0,
    speed: 600
  };

  constructor(
    public serviceComponent: AppComponent,
    private http: HttpClient,
    public loadingCtrl:LoadingController,

  ) { }

  ngOnInit() {
    this.getData();
  }
  async getData()
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
      }

      var url = this.serviceComponent.webservice()+'get-pengaturan';
      this.http.post(url,postData,requestOptions).subscribe((data) => {
        loading.dismiss()
        this.path = this.serviceComponent.path();
        this.slider = data['response']['setting_aplikasi'];
        console.log(data['response']['setting_aplikasi']);

      }, error => {
        loading.dismiss()
        alert('Please check your connection')
      });
   }

  goToSlide() {
    this.slides.slideTo(3, 500);
  }

}
