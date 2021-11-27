import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { LoadingController } from '@ionic/angular';
import { IonRouterOutlet, Platform, AlertController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ModalTempatIbadahPage } from '../modal-filter/modal-tempat-ibadah/modal-tempat-ibadah.page';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pencarian',
  templateUrl: './pencarian.page.html',
  styleUrls: ['./pencarian.page.scss'],
})
export class PencarianPage implements OnInit {
  public itemsTempatIbadah: any = [];
  public objekWisata: any = [];
  public hotel: any = [];
  public resto: any = [];
  public event: any = [];
  public path:any = [];
  public next:any=1;
  keyword :string='';
  selectKabupaten:any;
  lokasi :0;
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
    public loadingCtrl:LoadingController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  getPencarian(ev:any){
    var  val = ev.target.value;
    if (val && val.trim() != '') {
      let headers = new HttpHeaders({});
      let requestOptions = {
        headers: headers
      }
  
      let postData = {
        key:"pariwisata_riau",
        keyword:val,
      }
  
      var url = this.serviceComponent.webservice()+'pencarian';
      this.http.post(url,postData,requestOptions).subscribe((data) => 
      {
        this.path = this.serviceComponent.path();
        this.itemsTempatIbadah = data['response']['tempat_ibadah']['data'];
        this.objekWisata = data['response']['objek_wisata']['data'];
        this.hotel = data['response']['hotel']['data'];
        this.resto = data['response']['restoran']['data'];
        this.event = data['response']['event']['data'];
        },error => {
          alert('Please check your connection')
        });

    }

  }

}
