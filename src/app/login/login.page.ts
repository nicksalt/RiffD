import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  title = 'Login';
  email = '';
  password = '';
  emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  constructor(private toastController: ToastController) { }

  ngOnInit(){}

  submit(){
    if (this.password.length < 6) {
      this.presentToast('Password must be at least 6 charecters long.');
    } else if (!this.emailReg.test(String(this.email).toLowerCase())) {
      this.presentToast("Please enter a valid email.");
    } else {
      this.presentToast('User with this account does not exist. Please sign up.')
    }

  }

  async presentToast(messageString: string) {
    const toast = await this.toastController.create({
      message: messageString,
      showCloseButton: true,
      duration: 3000
    });
    toast.present();
  }

}
