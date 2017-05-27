import { TestBed, inject , async } from '@angular/core/testing';
import { HttpModule } from '@angular/http'
import { IPhotoListElement, IPhotoListElementDetails, IPhotoUrls } from './interfaces';

import { CommunicationService } from './communication.service';
import { RequestMakerService } from './request-maker/request-maker.service';

describe('CommunicationService', () => {
  var element;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpModule
      ],
      providers: [
        CommunicationService,
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

  it('should push found photos by stream', async(inject([CommunicationService], (service: CommunicationService) => {
    service.getPhotosStream().subscribe( (list:[IPhotoListElement]) => {
      if(list.length == 0)
        expect(typeof list).toBe('object');
      else
        expect(list[0].id).toBeTruthy();
    });
    service.searchPhotos('test');
    service.searchPhotos('safgogaofohsaohfohisahofa');
    service.searchPhotos('');
  })));
  
  it('should return photo details', async(inject([CommunicationService], (service: CommunicationService) => {
    service.getPhotoDetails(element)
      .subscribe(( photoDetails:IPhotoListElementDetails ) => {
        expect(photoDetails.id).toBeDefined();
      })
  })));

  it('should return photo urls', async(inject([CommunicationService], (service: CommunicationService) => {
    let url = service.getPhotoUrl(element);
    
    expect(url.id).toBeDefined();
    expect( typeof url.orginalUrl ).toBe( 'string' );
    expect( typeof url.thumbnailUrl ).toBe( 'string' );

    url = service.getPhotoUrl(<IPhotoListElement>{});
    
    expect(url.id).toBeDefined();
    expect( typeof url.orginalUrl ).toBe( 'string' );
    expect( typeof url.thumbnailUrl ).toBe( 'string' );

  })));
  
  it('should execute lightBox', async(inject([CommunicationService], (service: CommunicationService) => {
    service.getLightBoxStream()
      .subscribe(( photo:IPhotoListElement ) => {
        expect(typeof photo.id).toBe('string');
      })
      service.showLightBox(element);
  })));
});
