import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegcontainerComponent } from './regcontainer/regcontainer.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UserprofileComponent } from './userprofile/userprofile.component';

@NgModule({
  declarations: [
    RegcontainerComponent,
    UserprofileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SigninModule { }
