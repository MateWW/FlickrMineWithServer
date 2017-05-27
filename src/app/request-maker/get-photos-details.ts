import { Observable } from 'rxjs';
import { IPhotoUrls } from '../interfaces';
import { GetPhoto } from './get-photos';

export class GetPhotosDetails extends GetPhoto{


    constructor( http ){
        super( http );
    }

    getDetails( photoId ){
        return this.get( photoId , '/api/photoinfo');
    }
}