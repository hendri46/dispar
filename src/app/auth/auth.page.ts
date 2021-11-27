import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, ToastController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  private onLoginForm: FormGroup;
  constructor(
    public toastController: ToastController,
    public menuCtrl: MenuController,
    private fb: FormBuilder,
    public nav: NavController) {
    this.menuCtrl.enable(false);
    this.onLoginForm = new FormGroup({
      email: new FormControl('', Validators.pattern('.+\@.+\..+')),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }


  async goToast() {
    this.nav.navigateRoot('/tabs/tabs/browse');
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      cssClass: 'dark-toast',
      duration: 3000
    });
    toast.present();
  }


  ngOnInit() {
  }


}
