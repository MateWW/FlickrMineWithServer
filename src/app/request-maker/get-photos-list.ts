import { Observable } from 'rxjs';
import { IPhotoListElementDetails } from '../interfaces';

export class GetPhotoList{
    
    private http;

    constructor( http ){
        this.http = http;
    }

    getList( text:string ){

        if(!text || text.trim().length == 0)
            return Observable.of([]);

        return this.http.post("/api/search",{
            searchtext: text
            })
            .map(( response ) => ( response.json() ))
            .catch( (e) => ( Observable.of([]) ))
    }
}