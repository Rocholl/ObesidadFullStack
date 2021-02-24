import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AverageTablePageRoutingModule } from './average-table-routing.module';

import { AverageTablePage } from './average-table.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AverageTablePageRoutingModule
  ],
  declarations: [AverageTablePage]
})
export class AverageTablePageModule {}
