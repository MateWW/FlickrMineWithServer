import { Observable } from 'rxjs';
import { IPhotoListElementDetails } from '../interfaces';

export class GetPhotosDetails{

    private emptyPhotoDetails : IPhotoListElementDetails = {
        id: 0,
        secret: '',
        exif:[
            {
                label:'',
                raw:{
                    _content:'string'
                }
            }
        ]
    }
    
    private http;

    constructor( http ){
        this.http = http;
    }

    getDetails( photoId , secret ){

        if( !photoId || !secret )
            return Observable.of(this.emptyPhotoDetails);

        return this.http.post('/api/photoinfo' ,{
            photoid : photoId ,
            secret : secret
            })
            .map( ( response ) => ( response.json() ))
            .catch( (e) =>{
                return Observable.of(this.emptyPhotoDetails);
            })
    }

}