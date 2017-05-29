import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { PhotoListService } from './photo-list.service';
import { CommunicationService } from "../communication.service";


import { PagingComponent } from './paging.component';

describe('PagingComponent', () => {
  let component: PagingComponent;
  let fixture: ComponentFixture<PagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpModule
      ],
      declarations: [ 
        PagingComponent 
      ],
      providers: [
        PhotoListService,
        CommunicationService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
