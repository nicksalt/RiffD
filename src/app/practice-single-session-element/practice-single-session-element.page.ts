import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleSelectOverrideService } from '../services/module_select_override.service';

@Component({
  selector: 'app-practice-single-session-element',
  templateUrl: './practice-single-session-element.page.html',
  styleUrls: ['./practice-single-session-element.page.scss'],
  
})
export class PracticeSingleSessionElementPage implements OnInit {

  sessionInfo = {};
  timeRemaining = "0:15";
  timer;
  title = 'In Session';
  
  constructor(private router: Router, private moduleSelectService: ModuleSelectOverrideService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    let component = this; // Need to keep ref to actual page element
    this.sessionInfo = {
      title: "Preset Practice #1",
      subtitle: "Vibrato",
    };
    // Countdown timer
    let secondsString: string;
    let currentTime = 15; // seconds
    let timeRemaining = document.getElementById("timeRemaining");
    this.timer = setInterval(() => {
      currentTime = currentTime - 1;
      let minutes = parseInt((currentTime / 60).toString());
      let seconds = currentTime % 60;
      if (currentTime === -1) {
        component.moduleSelectService.toggleOverride();
        minutes = 0;
        seconds = 0;
        timeRemaining.innerHTML = `${minutes}:${seconds}`;
        alert("Congratulations! Click here to go back to your session overview");
        component.router.navigate(["practice-select-module"])
        clearInterval(this.timer);
        return;
      } else {
        if (seconds < 10) {
          secondsString = "0" + parseInt(seconds.toString());
        } else {
          secondsString = seconds.toString();
        }
        timeRemaining.innerHTML = `${minutes}:${secondsString}`;
      }
    }, 1000);
  }

  ionViewWillLeave() {
    clearInterval(this.timer);
  }

  cancelSession() {
    clearInterval(this.timer);
    this.router.navigate(["practice-select-module"]);
  }
}
