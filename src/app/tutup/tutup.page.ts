import { Component, OnInit } from '@angular/core';
import { LoadingController,ToastController,ActionSheetController,ModalController} from '@ionic/angular';

@Component({
  selector: 'app-tutup',
  templateUrl: './tutup.page.html',
  styleUrls: ['./tutup.page.scss'],
})
export class TutupPage implements OnInit {

  constructor(
    public toastController: ToastController,
    ) { 
  }

  async ngOnInit() {
    const toast = await this.toastController.create({
      cssClass: 'dark-toast',
      message: 'Terima kasih telah menggunakan aplikasi Jemari.',
      duration: 2000
    });
    toast.present();
    navigator["app"].exitApp();
  }

}
