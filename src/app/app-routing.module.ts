import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login-signup', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login-signup', loadChildren: './login-signup/login-signup.module#LoginSignupPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  {path: 'start-session', loadChildren: './practice/start-session/start-session.module#StartSessionPageModule'},
  // tslint:disable-next-line: max-line-length
  {path: 'practice-module-practice', loadChildren: './practice-module-practice/practice-module-practice.module#PracticeModulePracticePageModule'},
  {path: 'practice-select-module', loadChildren: './practice-select-module/practice-select-module.module#PracticeSelectModulePageModule'},
  { path: 'schedule', loadChildren: './schedule/schedule.module#SchedulePageModule' },
  { path: 'schedule-day', loadChildren: './schedule-day/schedule-day.module#ScheduleDayPageModule' },
  { path: 'select-custom-practice', loadChildren: './select-custom-practice/select-custom-practice.module#SelectCustomPracticePageModule'},
  // tslint:disable-next-line: max-line-length
  { path: 'practice-single-session-element', loadChildren: './practice-single-session-element/practice-single-session-element.module#PracticeSingleSessionElementPageModule'},  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'review', loadChildren: './review/review.module#ReviewPageModule' }

]


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
