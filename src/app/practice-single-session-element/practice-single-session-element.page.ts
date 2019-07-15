import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practice-single-session-element',
  templateUrl: './practice-single-session-element.page.html',
  styleUrls: ['./practice-single-session-element.page.scss'],
  
})
export class PracticeSingleSessionElementPage implements OnInit {

  sessionInfo = {};
  timeRemaining = 300;

  prettyPrintTimeRemaining() {

  }

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
    this.sessionInfo = {
      title: "Preset Practice #1",
      subtitle: "Scales",
    };
    setInterval(function() {
      this.timeRemaining = this.timeRemaining - 1;
    }, 1000);
  }

  cancelSession() {
    this.router.navigate(["/practice-select-module"])
  }

}
