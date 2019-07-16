import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  schedule = {Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: [], 
    Saturday: [], Sunday: []};
  elements = 0;
  constructor() {}

  public addPractice(dayOfWeek:string, time:String, practiceType:string) {
    if (dayOfWeek === 'Monday'){
      this.schedule.Monday.push({dayOfWeek: dayOfWeek, time: time, practiceType: practiceType});
      this.elements += 1;
    } else if (dayOfWeek === 'Tuesday'){
      this.schedule.Tuesday.push({dayOfWeek: dayOfWeek, time: time, practiceType: practiceType});
      this.elements += 1;
    } else if (dayOfWeek === 'Wednesday'){
      this.schedule.Wednesday.push({dayOfWeek: dayOfWeek, time: time, practiceType: practiceType});
      this.elements += 1;
    } else if (dayOfWeek === 'Thursday'){
      this.schedule.Thursday.push({dayOfWeek: dayOfWeek, time: time, practiceType: practiceType});
      this.elements += 1;
    } else if (dayOfWeek === 'Friday'){
      this.schedule.Friday.push({dayOfWeek: dayOfWeek, time: time, practiceType: practiceType});
      this.elements += 1;
    } else if (dayOfWeek === 'Saturday'){
      this.schedule.Saturday.push({dayOfWeek: dayOfWeek, time: time, practiceType: practiceType});
      this.elements += 1;
    } else if (dayOfWeek === 'Sunday'){
      this.schedule.Sunday.push({dayOfWeek: dayOfWeek, time: time, practiceType: practiceType});
      this.elements += 1;
    }
  }

  public getSchedule(){
    return this.schedule;
  }

  public getElementNumber(){
    return this.elements;
  }
}
