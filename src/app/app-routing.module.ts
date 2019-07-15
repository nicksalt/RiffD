import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login-signup', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login-signup', loadChildren: './login-signup/login-signup.module#LoginSignupPageModule' },
<<<<<<< HEAD
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
=======
  { path: 'start-session', loadChildren: './practice/start-session/start-session.module#StartSessionPageModule' },
  { path: 'practice-select-module', loadChildren: './practice-select-module/practice-select-module.module#PracticeSelectModulePageModule'},
  { path: 'practice-module-practice', loadChildren: './practice-module-practice/practice-module-practice.module#PracticeModulePracticePageModule' }
>>>>>>> origin/master
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
