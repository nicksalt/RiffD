import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleSelectOverrideService } from '../../services/module_select_override.service';

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
    if (this.module.completed) {
      alert("You've already completed this section!");
    } else {
      this.router.navigate(["/practice-module-practice"])
    }
  }
}
