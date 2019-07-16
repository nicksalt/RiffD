import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {Location} from '@angular/common';
import { ScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-schedule-day',
  templateUrl: './schedule-day.page.html',
  styleUrls: ['./schedule-day.page.scss'],
})
export class ScheduleDayPage implements OnInit {
  times: Array<string>;
  time: string = '0:00';
  title = "Schedule Practice Session"
  practiceType: string;
  day: string;

  constructor(public toastController: ToastController, private _location: Location, private schedule: ScheduleService) { 
    this.times = function() {
      const timeArr = new Array(12);
      let i;
      let hr = 0;
      let min = 15;
      for (i=0; i<timeArr.length; i++) {
        if (min === 0) {
          timeArr[i] = '0' + hr + ':00';
        } else {
          timeArr[i] = '0' + hr + ':' + min;
        }
        min += 15;
        if (min === 60) {
          hr += 1;
          min = 0;
        }
      }
      return timeArr;
     }();
  }

  ngOnInit() {
  }

  addDay() {
    console.log(this.time);
    console.log(this.practiceType);
    if (this.time === '0:00') { 
      this.presentToast('Please select a practice time.');
    } else if (this.practiceType === undefined){
      this.presentToast('Please select a practice type.');
    } else if (this.day === undefined) {
      this.presentToast('Please select a day of the week.');
    } else {
      this.schedule.addPractice(this.day, this.time, this.practiceType);
      this._location.back();
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
