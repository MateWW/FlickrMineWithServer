import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { IPhotoListElement, IPhotoListElementDetails, IPhotoUrls, IPhotoPrepared } from './interfaces';

import { RequestMakerService } from './request-maker/request-maker.service';

@Injectable()
export class CommunicationService {

  constructor( private requestMaker: RequestMakerService) {}

  private foundPhotos:[IPhotoListElement] = <[IPhotoListElement]>[];
  private photosStream = new Subject();

 

  searchPhotos( text:string ){
    this.requestMaker.getPhotosList( text )
      .subscribe( (list:[IPhotoListElement]) => {
        this.foundPhotos = list;
        this.photosStream.next(<[IPhotoPrepared]>this.preparePhotoList( list ));
      });
  }

  private preparePhotoList( list:[IPhotoListElement] ){
    let preparedList:[IPhotoPrepared] = <[IPhotoPrepared]>[];
    
    for( let photo of list )
    {
      let urls:IPhotoUrls = this.getPhotoUrl(photo);

      if( urls.id == 0 || urls.orginalUrl.length == 0 || urls.thumbnailUrl.length == 0 )
        continue;
      
      let preparedPhoto:IPhotoPrepared = {
          photoElement: photo,
          url: urls
      }
      preparedList.push(preparedPhoto);
    }

    return preparedList;
  }

  getPhotosStream(){
    return this.photosStream.startWith(this.foundPhotos);
  }







  private LightBoxStream = new Subject();

  showLightBox( photo:IPhotoListElement ){
    this.LightBoxStream.next( photo );
  }

  getLightBoxStream(){
    return this.LightBoxStream.asObservable();
  }






  getPhotoUrl( element:IPhotoListElement ){
    return this.requestMaker.getPhotoUrl(element);
  }

  getPhotoDetails( element:IPhotoListElement ){
    return this.requestMaker.getPhotoDetails(element); 
  }
}
