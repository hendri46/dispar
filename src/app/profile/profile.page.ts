import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, NavController, ToastController } from '@ionic/angular';
import { CouponsPage } from '../coupons/coupons.page';
import { InvitePage } from '../invite/invite.page';
import { EditprofilePage } from '../editprofile/editprofile.page';
import { MyordersPage } from '../myorders/myorders.page';
import { SupportPage } from '../support/support.page';
import { AuthPage } from '../auth/auth.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private toastCtrl: ToastController,
    private modalController: ModalController,
    public nav: NavController,
    public alertController: AlertController
    ) { }

  ngOnInit() {
  }


  async openCouponsPage() {
    const modal = await this.modalController.create({
      component: CouponsPage
    });
    modal.present();
  }

  async openInvitePage() {
    const modal = await this.modalController.create({
      component: InvitePage
    });
    modal.present();
  }

  async openProfilePage() {
    const modal = await this.modalController.create({
      component: EditprofilePage
    });
    modal.present();
  }

  async openOrderPage() {
    const modal = await this.modalController.create({
      component: MyordersPage
    });
    modal.present();
  }
  async openSupportPage() {
    const modal = await this.modalController.create({
      component: SupportPage
    });
    modal.present();
  }


  async openAlertlogout() {
    const alert = await this.alertController.create({
      header: 'You are logging out?',
      message: 'Are you sure you want to sign out?',
      cssClass: 'pop-style',
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Logout',
          handler: async () => {
            const toast = await this.toastCtrl.create({
              message: 'You are leaving. Please wait...',
              cssClass: 'dark-toast',
              duration: 4000
            });
            toast.present();

            setTimeout(() => {
              this.nav.navigateRoot('/auth');
            }, 3000);


          }
        }
      ]
    });

    await alert.present();



  }




}
