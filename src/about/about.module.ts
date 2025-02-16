import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisionPhaseComponent } from './vision-phase/vision-phase.component';
import { FounderZoneComponent } from './founder-zone/founder-zone.component';
import { LeadersComponent } from './leaders/leaders.component';

@NgModule({
  declarations: [
    VisionPhaseComponent,
    FounderZoneComponent,
    LeadersComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AboutModule { }
