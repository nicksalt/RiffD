import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practice-module-practice',
  templateUrl: './practice-module-practice.page.html',
  styleUrls: ['./practice-module-practice.page.scss'],
})
export class PracticeModulePracticePage implements OnInit {

  times: Array<string>;
  bpms: Array<number>;
  title = 'Vibrato';
  sessionInfo = {};

  constructor(private router: Router) {
    this.times = function() {
     let timeArr = new Array(29);
     let i;
     for (i=0; i<timeArr.length; i++) {
       timeArr[i] = (i+1).toString();
     }
     return timeArr;
    }();

    this.bpms = function(){
      let bpmsArr = new Array(191);
      let i;
      for (i=0; i<bpmsArr.length; i++) {
        bpmsArr[i] = i + 30;
      }
      return bpmsArr;
    }();
   }

  ngOnInit() {
    this.sessionInfo = {
      title: "Preset Practice #1",
      subtitle: "Vibrato",
    }
  }

  startPractice() {
    this.router.navigate(["/practice-single-session-element"])
  }
  playSample() {
    alert("A sample");
  }
}
