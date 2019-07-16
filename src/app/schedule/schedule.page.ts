import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { ScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  monday = {};
  tuesday = {};
  wednesday = {};
  thursday = {};
  friday = {};
  saturday = {};
  sunday = {};
  scheduleExist = false;
  title= "Schedule";

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
  }

  ionViewDidEnter (){
    console.log(this.scheduleService.getSchedule());
    if (this.scheduleService.getElementNumber() > 0){
      this.scheduleExist = true;
      this.monday = this.scheduleService.getSchedule().Monday;
      this.tuesday = this.scheduleService.getSchedule().Tuesday;
      this.wednesday = this.scheduleService.getSchedule().Wednesday;
      this.thursday = this.scheduleService.getSchedule().Thursday;
      this.friday = this.scheduleService.getSchedule().Friday;
      this.saturday = this.scheduleService.getSchedule().Saturday;
      this.sunday = this.scheduleService.getSchedule().Sunday;
      console.log(this.monday);
    } else{
      this.scheduleExist = false;
    }
  }

}