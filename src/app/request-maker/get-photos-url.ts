import { Observable } from 'rxjs';
import { IPhotoUrls , IPhotoListElement } from '../interfaces';



export class GetPhotoUrl {

    constructor(){ }

    getUrl( element:IPhotoListElement ){
        return <IPhotoUrls>{
            id : element.id || 0,
            orginalUrl: this.getOriginal(element),
            thumbnailUrl: this.getThumbnail(element)
        }
    }

    private getOriginal( element:IPhotoListElement ){
        if( !element.farm || !element.server || !element.id || !element.secret)
            return ``;
        return `https://farm${element.farm || 0}.staticflickr.com/${element.server || 0}/${element.id || 0}_${element.secret||0}_o.jpg`
    }
    private getThumbnail( element:IPhotoListElement ){
        if( !element.farm || !element.server || !element.id || !element.secret)
            return ``;
        return `https://farm${element.farm || 0}.staticflickr.com/${element.server || 0}/${element.id || 0}_${element.secret||0}_q.jpg`
    }

}