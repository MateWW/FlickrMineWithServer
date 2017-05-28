import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoListComponent } from './photo-list.component';
import { PagingComponent } from './paging.component';
import { ListComponent } from './list.component';

import { CommunicationService } from "../communication.service";
import { RequestMakerService } from "../request-maker/request-maker.service";
import { PhotoListService } from "./photo-list.service";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PhotoListComponent,
    PagingComponent,
    ListComponent
  ],
  providers:[
    CommunicationService,
    RequestMakerService,
    PhotoListService
  ],
  exports:[
    PhotoListComponent
  ]
})
export class PhotoListModule { }
