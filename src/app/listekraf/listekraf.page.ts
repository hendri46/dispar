import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavParams } from '@ionic/angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { LoadingController } from '@ionic/angular';
import { IonRouterOutlet, Platform, AlertController } from '@ionic/angular';
import { ModalObjekWisataPage } from '../modal-filter/modal-objek-wisata/modal-objek-wisata.page';

@Component({
  selector: 'app-listekraf',
  templateUrl: './listekraf.page.html',
  styleUrls: ['./listekraf.page.scss'],
})
export class ListekrafPage implements OnInit {
  public itemsEkraf: any = [];
  public path:any = [];
  public next:any=1;

  constructor(
    public menu: MenuController,
    private http: HttpClient,
    public serviceComponent: AppComponent,
    public loadingController: LoadingController,
    private alertCtrl: AlertController,
    private platform: Platform,
  ) {

    let headers = new HttpHeaders({});
        let requestOptions = {
          headers: headers
        }
        let postData = {
          key:"pariwisata_riau"
        }
        var url=this.serviceComponent.webservice()+'get-ekraf';
        this.http.post(url,postData,requestOptions).subscribe((data) => {
        this.path=this.serviceComponent.path();
        this.itemsEkraf=data['response']['items'];
        console.log(data);
      }, error => {
         alert('Please check your connection')
    });

   }

   refresh(event) {
    setTimeout(() => {
      event.target.complete();
      this.itemsEkraf=[];
      let headers = new HttpHeaders({});
      let requestOptions = {
        headers: headers
      }
      let postData = {
        key:"pariwisata_riau",
      }
      // this.url=this.komponen.webservice()+'apidrakor';
      var url=this.serviceComponent.webservice()+'get-ekraf';
      // this.http.get(this.url).subscribe((data) => {
      //   this.items=data;
      this.http.post(url,postData,requestOptions).subscribe((data) => {
        this.itemsEkraf=this.itemsEkraf.concat(data['response']['items']);
        
              
      }, error => {
         alert('Please check your connection')
      
    });
    }, 500);
  }

  loadData(event) {
    setTimeout(() => {
      event.target.complete();
      this.next++
      let headers = new HttpHeaders({});
        let requestOptions = {
          headers: headers
        }
        let postData = {
          key:"pariwisata_riau"
        }
        var url=this.serviceComponent.webservice()+'get-ekraf?page='+this.next;
        this.http.post(url,postData,requestOptions).subscribe((data) => {
        this.itemsEkraf=this.itemsEkraf.concat(data);
      });
    }, 500);
  }

  ngOnInit() {
  }

}
