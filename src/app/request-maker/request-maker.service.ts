import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { IPhotoUrls , IPhotoListElement , IPhotoListElementDetails} from '../interfaces';
import { GetPhotoUrl } from './get-photos-url';
import { GetPhotosDetails } from './get-photos-details';

@Injectable()
export class RequestMakerService {

  private PhotosUrl:GetPhotoUrl;
  private PhotosDetails:GetPhotosDetails;

  constructor( private http: Http ) {
    this.PhotosUrl = new GetPhotoUrl(http);
    this.PhotosDetails = new GetPhotosDetails(http);
  }

  getPhotosList( text:string ){
    if(!text || text.trim().length == 0)
      return Observable.of(undefined);
    return this.http.post("/api/search",{
      searchtext: text
    })
    .map(( response ) => ( response.json() ));
  }

  getPhotoUrl( photoId:number ){
    return this.PhotosUrl.getUrl( photoId );
  }

  getPhotoDetails( photoId:number ){
    return this.PhotosDetails.getDetails( photoId );
  }

}
