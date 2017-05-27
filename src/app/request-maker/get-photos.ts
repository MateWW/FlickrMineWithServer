import { Observable } from 'rxjs';
import { IPhotoUrls } from '../interfaces';

export class GetPhoto{
    private ImagesBase = [];
    private http;

    constructor( http ){
        this.http = http;
    }

    get( photoId , url , doFn?){
        let local = this.getFromLocal(photoId);

        if( !local ){
            return this.http.post(url,{
                    photoid : `${photoId}`
                })
                .map(( response ) => (  response.json() ))
                .do(( photos ) => {
                    if(doFn)       
                        doFn( photos );
                    this.saveLocal( photoId, photos );
                });
        }
        else 
            return Observable.of( local );
    }


  private saveLocal( photoId , datas){
    let datasCopy = Object.assign({}, datas );
    this.ImagesBase.push( datasCopy );
  }

  getFromLocal( photoId:number ){
    return this.ImagesBase.find( ( savedPhoto ) => ( savedPhoto.id == photoId ))
  }
}