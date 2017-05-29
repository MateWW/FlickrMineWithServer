import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { PhotoListModule } from './list/photo-list.module';
import { SearchModule } from './search/search.module';
import { LightBoxModule } from "./light-box/light-box.module";

import { AppComponent } from './app.component';

import { CommunicationService } from "./communication.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PhotoListModule,
    LightBoxModule,
    SearchModule,
    HttpModule
  ],
  providers: [
    CommunicationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
