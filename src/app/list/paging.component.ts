import { Component, OnInit } from '@angular/core';
import { PhotoListService } from './photo-list.service';
import { IPageRange } from '../interfaces';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit {

  pagesRange:IPageRange;

  constructor( private photoListService: PhotoListService ) {
    photoListService.getPageStream()
      .subscribe( ( pagesRange:IPageRange ) => {
        this.pagesRange = pagesRange;
      });
  }


  ngOnInit() {
  }

  chosePage( page:number ){
    this.photoListService.choosePage( +page );
  }


}
