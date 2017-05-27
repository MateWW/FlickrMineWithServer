import { TestBed, inject , async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs'
import { RequestMakerService } from './request-maker.service';
import { IPhotoUrls , IPhotoListElementDetails } from '../interfaces';

describe('RequestMakerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [
        HttpModule
      ],
      providers: [
        RequestMakerService        
      ]
    });
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

  it('[PhotoUrls] should download photos adress for thumbnail or orginal size display',async(inject([RequestMakerService], (service: RequestMakerService) => {
      service.getPhotoUrl(34867730986)
      .subscribe((value:IPhotoUrls)=>{
        expect( value.id ).toBeTruthy();
        expect( value.thumbnail ).toBeTruthy();
        expect( value.orginal ).toBeTruthy();
      });
  })));

  it('[PhotoDetails] should download information about photo' ,async(inject([RequestMakerService], (service: RequestMakerService) => {
      service.getPhotoDetails(34867730986)
      .subscribe((value:IPhotoListElementDetails)=>{
        expect( value.id ).toBeTruthy();
        expect( value.description ).toBeTruthy();
        expect( value.title ).toBeTruthy();
        expect( value.dates ).toBeTruthy();
      });
  })))

});
