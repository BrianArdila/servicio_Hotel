import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'actividades',
        loadChildren: () => import('../actividades/actividades.module').then( m => m.ActividadesPageModule)
      },
      {
        path: 'mis-actividades',
        loadChildren: () => import('../mis-actividades/mis-actividades.module').then( m => m.MisActividadesPageModule)
      },
      {
        path: 'setup',
        loadChildren: () => import('../setup/setup.module').then( m => m.SetupPageModule)
      },
      // {
      //   path: 'actividad-detail',
      //   loadChildren: () => import('./actividad-detail/actividad-detail.module').then( m => m.ActividadDetailPageModule)
      // },
      // {
      //   path: 'user-detail',
      //   loadChildren: () => import('./user-detail/user-detail.module').then( m => m.UserDetailPageModule)
      // },
      {
        path: '',
        redirectTo: '/tabs/actividades',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login', //'/tabs/actividades',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
