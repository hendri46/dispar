import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, ToastController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private onRegisterForm: FormGroup;
  constructor(
    public toastController: ToastController,
    public menuCtrl: MenuController,
    private fb: FormBuilder,
    public nav: NavController) {
    this.menuCtrl.enable(false);
    this.onRegisterForm = new FormGroup({
      name: new FormControl('', Validators.required),
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
