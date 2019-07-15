import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PracticeSelectModulePage } from './practice-select-module.page';
import { PracticeSessionHeaderComponent } from '../components/practice-session-header/practice-session-header.component';
import { ModuleSelectComponent } from '../components/module-select/module-select.component';

const routes: Routes = [
  {
    path: '',
    component: PracticeSelectModulePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PracticeSelectModulePage, PracticeSessionHeaderComponent, ModuleSelectComponent]
})
export class PracticeSelectModulePageModule {}
