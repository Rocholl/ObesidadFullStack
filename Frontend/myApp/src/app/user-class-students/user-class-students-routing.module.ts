import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserClassStudentsPage } from './user-class-students.page';

const routes: Routes = [
  {
    path: '',
    component: UserClassStudentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserClassStudentsPageRoutingModule {}
