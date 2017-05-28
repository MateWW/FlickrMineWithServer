import { Injectable } from '@angular/core';
import { CommunicationService } from '../communication.service';
@Injectable()
export class SearchService {

  constructor( private communication : CommunicationService ) { }

  search( text : string ){
    this.communication.searchPhotos( text );
  } 

}
