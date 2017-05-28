import { TestBed, inject , async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs'
import { RequestMakerService } from './request-maker.service';
import { IPhotoUrls , IPhotoListElementDetails } from '../interfaces';

describe('RequestMakerService', () => {
  let element;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [
        HttpModule
      ],
      providers: [
        RequestMakerService        
      ]
    });
    element = {
        farm:5,
        id:"34790913391",
        isfamily:false,
        isfriend:false,
        ispublic:true,
        owner:"90535065@N03",
        secret:"450a072460",
        server:"4243",
        title:"test123"
      }
  });

  it('[PhotosList]should try download "testowafe" but no data returned ', async(inject([RequestMakerService], (service: RequestMakerService) => {
    service.getPhotosList("testowafe")
    .subscribe( ( photos ) => {
      if(!photos)
        expect(photos).toBeUndefined();
      else
        expect(photos.length).toEqual(0);
    });
  })));

  it('[PhotosList]should try download "Beco do batman" but no data returned ', async(inject([RequestMakerService], (service: RequestMakerService) => {
    service.getPhotosList("Beco do batman")
    .subscribe( ( photos ) => {
      if(!photos)
        expect(photos).toBeUndefined();
      else
        expect(photos.find((value)=>(value.id=="34748259152"))).toBeTruthy;
    });
  })));

  it('[PhotoUrls] should create photos adress for thumbnail or orginal size display',async(inject([RequestMakerService], (service: RequestMakerService) => {
      let urls = service.getPhotoUrl(element)
        expect( urls.id ).toBeDefined();
        expect( typeof urls.orginalUrl ).toBe( 'string' );
        expect( typeof urls.thumbnailUrl ).toBe( 'string' );
  })));


  it('[PhotoDetails] should download information about photo' ,async(inject([RequestMakerService], (service: RequestMakerService) => {
      service.getPhotoDetails(element)
      .subscribe((value:IPhotoListElementDetails)=>{
        expect( value.id ).toBeDefined();
        expect( value.exif ).toBeDefined();
      });
  })))

});
