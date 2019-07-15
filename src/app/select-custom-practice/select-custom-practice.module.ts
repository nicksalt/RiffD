import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SelectCustomPracticePage } from './select-custom-practice.page';

const routes: Routes = [
  {
    path: '',
    component: SelectCustomPracticePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SelectCustomPracticePage]
})
export class SelectCustomPracticePageModule {}
