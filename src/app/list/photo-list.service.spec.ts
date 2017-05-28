import { TestBed, inject , async } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { IPhotoPrepared, IPageRange } from '../interfaces';

import { PhotoListService } from './photo-list.service';
import { CommunicationService } from "../communication.service";

class CommunicationServiceStub{
    private stream = new Subject();
    getPhotosStream(){
      return this.stream.startWith([]);
    }
    pushEmpty(){
      this.stream.next([]);
    }
    pushLogs( amount : number){
      let list = [];
      for( let  i = 0 ; i<amount ; i++)
      {
        list.push(<IPhotoPrepared>{
          photoElement:{
            id:1234,
            title:'Test'
          },
          url: {
            id:1234,
            orginalUrl:'Test original',
            thumbnailUrl:'Test thumbnail'
          }
        })
      }
      this.stream.next(list);
    }
}

describe('PhotoListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PhotoListService,
        { provide: CommunicationService , useClass : CommunicationServiceStub }
      ]
    });
  });

  it('should check photo stream', async(inject([PhotoListService, CommunicationService], (service: PhotoListService, communication: CommunicationServiceStub) => {
    service.getPhotoStream()
      .subscribe(( photoList:[IPhotoPrepared] )=>{
        expect(photoList.length).toBeDefined();
        expect(photoList.length).toBeLessThanOrEqual(9);
        expect(photoList.length).toBeGreaterThanOrEqual(0);
      })
    communication.pushEmpty();
    communication.pushLogs(8);
    communication.pushLogs(59);
    service.choosePage(2);
    expect(service).toBeTruthy();
  })));

  it('should check page stream', async(inject([PhotoListService, CommunicationService], (service: PhotoListService, communication: CommunicationServiceStub) => {
    service.getPageStream()
      .subscribe(( pages:IPageRange )=>{
          expect(pages).toBeDefined();
          expect(typeof pages).toBe("object");
          expect(typeof pages.active).toBe("number");
          expect(typeof pages.pageRage).toBe("object");

      })
    communication.pushEmpty();
    communication.pushLogs(10000);
    service.choosePage(500);
    communication.pushLogs(9999);
    communication.pushLogs(76);
    service.choosePage(35);
    communication.pushLogs(4);
    service.choosePage(4);
    service.choosePage(1);
    communication.pushLogs(50);
    service.choosePage(5);
    service.choosePage(6);
    expect(service).toBeTruthy();
  })));

  it('should check choosePage', async(inject([PhotoListService, CommunicationService], (service: PhotoListService, communication: CommunicationServiceStub) => {
    communication.pushLogs(10000);
    service.getPhotoStream()
      .subscribe(( photoList:[IPhotoPrepared] )=>{
        expect(photoList.length).toBeDefined();
        expect(photoList.length).toBeLessThanOrEqual(9);
        expect(photoList.length).toBeGreaterThan(0);
      })
    service.choosePage(500);
    service.choosePage(1200);
    service.choosePage(-20);
    expect(service).toBeTruthy();
  })));

});
