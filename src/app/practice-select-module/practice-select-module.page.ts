import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleSelectOverrideService } from '../services/module_select_override.service';

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
      title: "Vibrato",
      time: "5:00",
      bpm: "60",
      completed: false,
    },
    {
      title: "Scales",
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
  constructor(private router: Router, private moduleSelectService: ModuleSelectOverrideService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    if (this.moduleSelectService.getOverride()) {
      this.completed = 3;
      this.total = 3;
      this.title = "Preset Practice #1";
      this.modulesData[0].completed = true; // prototype hack
    } else {
      this.completed = 2;
      this.total = 3;
      this.title = "Preset Practice #1";
      this.modulesData[0].completed = false; // prototype hack
    }

    this.sessionInfo = {
      completed: (this.moduleSelectService.getOverride() ? 3 : this.completed),
      total: this.total,
      title: this.title,
    }
  }
}
