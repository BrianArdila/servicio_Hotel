import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisActividadesPageRoutingModule } from './mis-actividades-routing.module';

import { MisActividadesPage } from './mis-actividades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisActividadesPageRoutingModule
  ],
  declarations: [MisActividadesPage]
})
export class MisActividadesPageModule {}
