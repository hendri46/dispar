import { Component, OnInit, NgModule,Input  } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-modal-tempat-ibadah',
  templateUrl: './modal-tempat-ibadah.page.html',
  styleUrls: ['./modal-tempat-ibadah.page.scss'],
})

@NgModule({
  imports: [
    FormsModule
  ]
})

export class ModalTempatIbadahPage implements OnInit {
  @Input('keyword') keyword;
  @Input('selectKabupaten') selectKabupaten;
  @Input('selectAgama') selectAgama;
  
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
    let data = {'keyword':this.keyword,'kabupaten':this.selectKabupaten,'agama':this.selectAgama}
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
