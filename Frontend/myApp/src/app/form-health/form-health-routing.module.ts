import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormHealthPage } from './form-health.page';

const routes: Routes = [
  {
    path: '',
    component: FormHealthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormHealthPageRoutingModule {}
