import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-practice-session-header',
  templateUrl: './practice-session-header.component.html',
  styleUrls: ['./practice-session-header.component.scss'],
})
export class PracticeSessionHeaderComponent implements OnInit {

  @Input() sessionInfo;
  // TODO actually grab params (but can fallback to some default dummy values for prototype)
  constructor() { 
    console.log(this.sessionInfo);
  }
  
  ngOnInit() {}

}
