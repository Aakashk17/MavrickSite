import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ImagegridComponent } from './imagegrid/imagegrid.component';



@NgModule({
  declarations: [
    BodyComponent,
    AchievementsComponent,
    ImagegridComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
