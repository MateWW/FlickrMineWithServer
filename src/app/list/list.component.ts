import { Component, OnInit } from '@angular/core';
import { PhotoListService } from './photo-list.service'
import { IPhotoPrepared } from '../interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private list:[IPhotoPrepared] = <[IPhotoPrepared]>[];

  constructor( private service:PhotoListService ) {  }

  ngOnInit() {
    this.service.getPhotoStream()
      .subscribe( ( photos:[IPhotoPrepared] ) => {
        this.list = photos;
      } );
  }

  showOrginalPhoto( preparedPhoto:IPhotoPrepared ){
    this.service.showOrginalPhoto( preparedPhoto.photoElement );
  }

}
