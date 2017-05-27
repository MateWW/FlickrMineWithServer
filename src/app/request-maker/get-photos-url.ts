import { Observable } from 'rxjs';
import { IPhotoUrls } from '../interfaces';

import { GetPhoto } from './get-photos';

export class GetPhotoUrl extends GetPhoto{

    constructor( http ){
        super( http );
    }

    getUrl( photoId ){
       this.get( photoId , '/api/photolinks/' , ( photos ) => {
         photos.id = parseInt(photoId);
       });
    }

}