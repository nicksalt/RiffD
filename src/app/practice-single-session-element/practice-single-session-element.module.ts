import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PracticeSingleSessionElementPage } from './practice-single-session-element.page';

const routes: Routes = [
  {
    path: '',
    component: PracticeSingleSessionElementPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PracticeSingleSessionElementPage]
})
export class PracticeSingleSessionElementPageModule {}
