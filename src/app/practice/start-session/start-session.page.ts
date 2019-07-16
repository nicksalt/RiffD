import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-session',
  templateUrl: './start-session.page.html',
  styleUrls: ['./start-session.page.scss'],
})
export class StartSessionPage implements OnInit {

  title = 'Start Session';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  startScheduledPractice() {
    this.router.navigate(["/practice-select-module"])
  }

  selectCustomPractice() {
    this.router.navigate(["/select-custom-practice"])
  }
}
