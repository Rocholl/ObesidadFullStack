import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserClassStudentsPageRoutingModule } from './user-class-students-routing.module';

import { UserClassStudentsPage } from './user-class-students.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserClassStudentsPageRoutingModule
  ],
  declarations: [UserClassStudentsPage]
})
export class UserClassStudentsPageModule {}
