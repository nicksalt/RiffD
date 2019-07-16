import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import {ModuleSelectOverrideService } from '../services/module_select_override.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title = 'Home';
  name = 'Welcome';

  constructor(private storage: Storage, private moduleSelectService: ModuleSelectOverrideService) {
  
  }

  ionViewWillEnter(){
    this.moduleSelectService.reset();

    this.storage.get('name').then((val) => {
      this.name = 'Welcome, ' + val;
    })
  }

}
