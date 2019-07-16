import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title = 'Home';
  name = 'Welcome';

  constructor(private storage: Storage) {
  
  }

  ionViewWillEnter(){
    console.log("CALLED!");
    this.storage.get('name').then((val) => {
      this.name = 'Welcome, ' + val;
    })
  }

}
