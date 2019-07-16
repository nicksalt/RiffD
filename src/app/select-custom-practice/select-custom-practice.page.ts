import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-custom-practice',
  templateUrl: './select-custom-practice.page.html',
  styleUrls: ['./select-custom-practice.page.scss'],
})
export class SelectCustomPracticePage implements OnInit {

  customPractices = [
    "Expressiveness and tone",
    "Speed",
    "Arpeggios and scales",
    "Modes and harmony",
    "Chord inversions",
    "Jazz progressions",
    "Fingerpicking and syncopation"
  ]

  title = 'Select Custom Practice';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  startScheduledPractice() {
    this.router.navigate(["/practice-select-module"])
  }
}
