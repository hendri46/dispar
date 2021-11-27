import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { LoadingController } from '@ionic/angular';
import { IonRouterOutlet, Platform, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sadarwisata',
  templateUrl: './sadarwisata.page.html',
  styleUrls: ['./sadarwisata.page.scss'],
})
export class SadarwisataPage implements OnInit {
  public itemsSadar: any = [];
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
        var url=this.serviceComponent.webservice()+'get-sadar-wisata';
        this.http.post(url,postData,requestOptions).subscribe((data) => {
        this.path=this.serviceComponent.path();
        this.itemsSadar=data['response']['items']['data'];
        console.log(data);
      }, error => {
         alert('Please check your connection')
    });

   }

   refresh(event) {
    setTimeout(() => {
      event.target.complete();
      this.itemsSadar=[];
      let headers = new HttpHeaders({});
      let requestOptions = {
        headers: headers
      }
      let postData = {
        key:"pariwisata_riau"
      }
      // this.url=this.komponen.webservice()+'apidrakor';
      var url=this.serviceComponent.webservice()+'get-sadar-wisata';
      // this.http.get(this.url).subscribe((data) => {
      //   this.items=data;
      this.http.post(url,postData,requestOptions).subscribe((data) => {
        this.itemsSadar=this.itemsSadar.concat(data['response']['items']['data']);
              
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
        var url=this.serviceComponent.webservice()+'get-sadar-wisata?page='+this.next;
        this.http.post(url,postData,requestOptions).subscribe((data) => {
        this.itemsSadar=this.itemsSadar.concat(data);
      });
    }, 500);
  }

  ngOnInit() {
  }

}
