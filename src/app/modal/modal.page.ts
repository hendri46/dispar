import { Component, OnInit, NgModule,Input  } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})

@NgModule({
  imports: [
    FormsModule
  ]
})



export class ModalPage implements OnInit {
  @Input('keyword') keyword;
  @Input('selectKabupaten') selectKabupaten;
  @Input('lokasi') lokasi;
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
    let data = {'keyword':this.keyword,'kabupaten':this.selectKabupaten,'lokasi':this.lokasi}
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

      var url = 'http://localhost/project/coding/pariwisata2/public/api/get-kabupaten';
      this.http.post(url,postData,requestOptions).subscribe((data) => 
      {
        this.kabupaten = data['response']['items_kabupaten'];
        console.log(data);
      }, error => {
        alert('Please check your connection')
    });
  }
}
