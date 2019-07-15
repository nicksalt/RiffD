import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practice-select-module',
  templateUrl: './practice-select-module.page.html',
  styleUrls: ['./practice-select-module.page.scss'],
})

export class PracticeSelectModulePage implements OnInit {
  completed: number;
  total: number;
  title: string;

  sessionInfo = {}

  modulesData = [
    {
      title: "Scales",
      time: "5:00",
      bpm: "60",
      completed: false,
    },
    {
      title: "Vibrato",
      time: "10:00",
      bpm: "100",
      completed: true,
    },
    {
      title: "Theory",
      time: "15:00",
      bpm: "N/A",
      completed: true,
    }
  ]

  // TODO grab by params
  constructor(private router: Router) { 
    this.completed = 2;
    this.total = 3;
    this.title = "Preset Practice #1";
  }

  ngOnInit() {
    this.sessionInfo = {
      completed: this.completed,
      total: this.total,
      title: this.title,
    }
    
  }
}
