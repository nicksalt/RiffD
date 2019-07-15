import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practice-single-session-element',
  templateUrl: './practice-single-session-element.page.html',
  styleUrls: ['./practice-single-session-element.page.scss'],
  
})
export class PracticeSingleSessionElementPage implements OnInit {

  sessionInfo = {};
  timeRemaining = "0:30";

  prettyPrintTimeRemaining() {

  }

  constructor(private router: Router) { 

  }

  ngOnInit() {
    this.sessionInfo = {
      title: "Preset Practice #1",
      subtitle: "Scales",
    };
    let currentTime = 30; // seconds
    let timeRemaining = document.getElementById("timeRemaining");
    let timer = setInterval(function() {
      console.log("FIRING");
      currentTime = currentTime - 1;
      let minutes = parseInt(currentTime / 60);
      let seconds = currentTime % 60;
      if (currentTime === 0) {
        minutes = 0;
        seconds = 0;
        
        clearInterval(timer);
      }

      if (seconds < 10) {
        seconds = "0" + parseInt(seconds);
      }
      timeRemaining.innerHTML = `${minutes}:${seconds}`;
    }, 1000);
  }

  cancelSession() {
    this.router.navigate(["/practice-select-module"])
  }

}
