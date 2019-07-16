import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { 
  }

  ngOnInit() {
    this.sessionInfo = {
      title: "Preset Practice #1",
      subtitle: "Scales",
    };

    // Countdown timer
    let secondsString: string;
    let currentTime = 15; // seconds
    let timeRemaining = document.getElementById("timeRemaining");
    this.timer = setInterval(function() {
      currentTime = currentTime - 1;
      let minutes = parseInt((currentTime / 60).toString());
      let seconds = currentTime % 60;
      if (currentTime === 0) {
        minutes = 0;
        seconds = 0;
        timeRemaining.innerHTML = `${minutes}:${seconds}`;
        alert("Congratulations! Click here to go back to your session overview");
        window.location.href =  "/practice-select-module";
        clearInterval(this.timer);
      }

      if (seconds < 10) {
        secondsString = "0" + parseInt(seconds.toString());
      } else {
        secondsString = seconds.toString();
      }
      timeRemaining.innerHTML = `${minutes}:${secondsString}`;
    }, 1000);
  }

  cancelSession() {
    clearInterval(this.timer);
    this.router.navigate(["practice-select-module"]);
  }
}
