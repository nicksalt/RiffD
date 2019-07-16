import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ModuleSelectOverrideService {
  private overrideComplete: boolean = false;
  
  constructor() {}

  public toggleOverride() {
    this.overrideComplete = !this.overrideComplete;
    return this.overrideComplete;
  }

  public getOverride() {
    return this.overrideComplete;
  }

  public reset() {
    this.overrideComplete = false;
  }
}
