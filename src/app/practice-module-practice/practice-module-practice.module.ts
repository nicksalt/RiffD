import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PracticeModulePracticePage } from './practice-module-practice.page';
import { PracticeSessionHeaderComponent } from '../components/practice-session-header/practice-session-header.component';

const routes: Routes = [
  {
    path: '',
    component: PracticeModulePracticePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PracticeModulePracticePage]
})
export class PracticeModulePracticePageModule {}
