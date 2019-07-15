import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-module-select',
  templateUrl: './module-select.component.html',
  styleUrls: ['./module-select.component.scss'],
})
export class ModuleSelectComponent implements OnInit {
  
  @Input() module;
  
  constructor(private router: Router) { }
    
  ngOnInit() {}

  getModule() {
    console.log("NOT IMPLEMENTED");
    // TODO navigate to next page
    this.router.navigate(["/practice-module-practice"])
  }
}
