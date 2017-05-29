import { Component, OnInit } from '@angular/core';

import { LightBoxService } from './light-box.service';

@Component({
  selector: 'light-box',
  templateUrl: './light-box.component.html',
  styleUrls: ['./light-box.component.scss']
})
export class LightBoxComponent implements OnInit {

  visible:boolean = false;

  constructor( private lightBox:LightBoxService ) { }

  ngOnInit() {
    this.lightBox.getVisibileStream()
      .subscribe( ( status:boolean) => {
          this.visible = status;
      });
  }

  close(){
    this.lightBox.closeLightBox();
  }

}
