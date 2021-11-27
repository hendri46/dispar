import { Component, OnInit, NgModule,Input  } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-modal-objek-wisata',
  templateUrl: './modal-objek-wisata.page.html',
  styleUrls: ['./modal-objek-wisata.page.scss'],
})

@NgModule({
  imports: [
    FormsModule
  ]
})

export class ModalObjekWisataPage implements OnInit {
  @Input('keyword') keyword;
  @Input('selectKabupaten') selectKabupaten;
  @Input('lokasi') lokasi;
  @Input('jenis') jenis;
  public path:any = [];
  public kabupaten:any = [];

  constructor( 
    private navParams: NavParams, 
    private modalCtrl: ModalController,
    private http: HttpClient,
    private router: Router
    ) 
    { 
    
    }

  customPopoverOptions: any = {
    cssClass: 'custom-popover'
  };

  knobValues: any = {
    upper: '45',
    lower: '10'
  };
  ngOnInit() {
    this.getData();
  }
  async closeModal() {
    // this.router.navigate(['/list-wisata']);
    let data = {'keyword':this.keyword,'kabupaten':this.selectKabupaten,'lokasi':this.lokasi,'jenis':this.jenis}
    await this.modalCtrl.dismiss(data);
  }

  getData()
  {
    let headers = new HttpHeaders({});
      let requestOptions = {
        headers: headers
      }

      let postData = {
        key:"pariwisata_riau"
      }

      var url = 'https://jemari.riau.go.id/api/get-kabupaten';
      this.http.post(url,postData,requestOptions).subscribe((data) => 
      {
        this.kabupaten = data['response']['items_kabupaten'];
        console.log(data);
      }, error => {
        alert('Please check your connection')
    });
  }
}
