import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightBoxComponent } from './light-box.component';

import { CommunicationService } from "../communication.service";
import { RequestMakerService } from "../request-maker/request-maker.service";
import { LightBoxService } from "./light-box.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LightBoxComponent
  ],
  providers:[
    CommunicationService,
    RequestMakerService,
    LightBoxService
  ],
  exports:[
    LightBoxComponent
  ]
})
export class LightBoxModule { }
