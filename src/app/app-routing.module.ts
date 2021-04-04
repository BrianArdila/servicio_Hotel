import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }, 
  // {
  //   path: 'login',
  //   loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  // },
  // {
  //   path: 'actividad-detail',
  //   loadChildren: () => import('./actividad-detail/actividad-detail.module').then( m => m.ActividadDetailPageModule)
  // },
  // {
  //   path: 'user-detail',
  //   loadChildren: () => import('./user-detail/user-detail.module').then( m => m.UserDetailPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
