import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CommunicationService } from '../communication.service';
import { IPhotoListElement, IPageRange } from '../interfaces';

@Injectable()
export class PhotoListService {
  
  private pagesRage:number = 5; // odd numbers

  private photoPerPage:number = 9;

  private PhotoList:[IPhotoListElement];

  private PageStream = new Subject();
  private PhotoStream = new Subject();

  private numberOfPages = 0;

  constructor( private communication:CommunicationService ) { 
    this.communication.getPhotosStream()
      .subscribe( ( photoList:[IPhotoListElement] ) => {
        this.PhotoList = photoList;
        this.numberOfPages = this.getPages();
        this.getPagePhotos( 1 );
        this.generatePagingRange( 1 );
      })
  }

  private getPages(){
    let numberOfPhotos = this.PhotoList.length/this.photoPerPage,
        numberOfPages = Math.floor(numberOfPhotos)

    return numberOfPages < numberOfPhotos ? (numberOfPages+1) : numberOfPhotos
  }

  private getPagePhotos( page:number ){
    let photos = <[IPhotoListElement]>[],
      startPhotoIndex = page == 1 ? 0 : (page-1) * this.photoPerPage -1,
      endPhotoIndex = startPhotoIndex+this.photoPerPage;

    photos = <[IPhotoListElement]>this.PhotoList.slice(startPhotoIndex,endPhotoIndex);
    
    this.PhotoStream.next( <[IPhotoListElement]>photos );

    return photos;
  }

  private generatePagingRange( page:number ){
    let pageRange = [],
        halfRange =  ( this.pagesRage-1 )/2,
        start = page - halfRange < 1 ? 1 : page - halfRange,
        startWithRage = start + this.pagesRage,
        end = startWithRage > this.numberOfPages ? this.numberOfPages + 1 :  startWithRage,
        missing = this.pagesRage - (end - start);

    if( missing > 0 && start > 1)
      start = ( start - missing ) < 1 ? 1 : start - missing; 

    for( let i = start ; i < end ; i++ )
      pageRange.push(i);

    let rageObject = {
      active : page,
      pageRage : pageRange
    }

   this.PageStream.next(<IPageRange>rageObject);
   return <IPageRange>rageObject;
  }


  choosePage( page:number ){
    let pageLimit = Math.abs(page);    
    pageLimit = pageLimit > this.numberOfPages ? this.numberOfPages : pageLimit;
    this.generatePagingRange( pageLimit );
    this.getPagePhotos( pageLimit );
  }

  getPageStream(){
    return this.PageStream.startWith( this.generatePagingRange(1) );
  }
  
  getPhotoStream(){
    return this.PhotoStream.startWith( this.getPagePhotos(1) );
  }

  showOrginalPhoto( photo:IPhotoListElement ){
    this.communication.showLightBox( photo );
  }

}
