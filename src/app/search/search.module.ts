import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CommunicationService } from "../communication.service";
import { RequestMakerService } from "../request-maker/request-maker.service";
import { SearchService } from "./search.service";

import { SearchComponent } from './search.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SearchComponent
  ],
  providers:[
    CommunicationService,
    RequestMakerService,
    SearchService
  ],
  exports:[
    SearchComponent
  ]
})
export class SearchModule { }
