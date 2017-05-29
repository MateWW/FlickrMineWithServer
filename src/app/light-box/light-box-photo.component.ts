import { Component, OnInit } from '@angular/core';
import { IPhotoUrls } from "../interfaces";
import { LightBoxService } from './light-box.service';

@Component({
  selector: 'light-box-photo',
  template: `
    <div class="lightBox__photo">
      <div *ngIf="url; else loader">
        <img [src]="url" alt="Photo"/>
      </div>
      <ng-template #loader><div class="loading"></div></ng-template>
    </div>
  `,
  styles: [`
    .lightBox__photo{
        width: 80vw;
        height: 80vh;
        margin:10vh 10vw;
        position:relative;
        z-index:1001;
        display:flex;
        justify-content:center;
        align-items:center;
    }
  `]
})
export class LightBoxPhotoComponent implements OnInit {

  url:string
  constructor( private lightBox:LightBoxService ) { }
  
  ngOnInit() {
    this.lightBox.getPhotoUrlStream()
      .subscribe( ( photoUrls:IPhotoUrls) =>{
          this.url = photoUrls.orginalUrl;
      })
  }

}
