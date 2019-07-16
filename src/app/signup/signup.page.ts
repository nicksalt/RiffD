import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  fName = '';
  lName = '';
  email = '';
  password = '';
  confirmPassword = '';
  title = 'Sign Up'

  constructor(public toastController: ToastController, private storage: Storage, 
    private router: Router) { }

  ngOnInit() {
  }

  submit(){
    if (this.password !== this.confirmPassword) {
      this.presentToast("Passwords do not match")
    } else if (this.password.length < 6) {
      this.presentToast('Password must be at least 6 charecters long.');
    } else if (this.fName.length == 0) {
      this.presentToast("Please enter a first name.");
    } else if (this.lName.length == 0) {
      this.presentToast("Please enter a last name.");
    } else if (!this.emailReg.test(String(this.email).toLowerCase())) {
      this.presentToast("Please enter a valid email.");
    } else {
      this.storage.set('name', this.fName);
      this.router.navigate(['../home'])
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
