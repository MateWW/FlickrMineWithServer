import { TestBed, inject, async} from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { SearchService } from './search.service';

import { CommunicationService } from "../communication.service";


describe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpModule
      ],
      providers:[
        SearchService,
        CommunicationService
      ]
    });
  });

  it('should send text from input', async(inject([SearchService,CommunicationService], (service: SearchService, communication:CommunicationService) => {
    communication.getPhotosStream()
      .subscribe( (photos)=>{
        expect(typeof photos).toBe('object');
      });
    service.search("random text");
  })));
});
