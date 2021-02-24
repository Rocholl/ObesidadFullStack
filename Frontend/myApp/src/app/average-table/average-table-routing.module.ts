import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AverageTablePage } from './average-table.page';

const routes: Routes = [
  {
    path: '',
    component: AverageTablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AverageTablePageRoutingModule {}
