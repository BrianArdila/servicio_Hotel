import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActividadDetailPageRoutingModule } from './actividad-detail-routing.module';

import { ActividadDetailPage } from './actividad-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActividadDetailPageRoutingModule
  ],
  declarations: [ActividadDetailPage]
})
export class ActividadDetailPageModule {}
