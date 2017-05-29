import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { PhotoListComponent } from './photo-list.component';
import { PagingComponent } from './paging.component';
import { ListComponent } from './list.component';

import { PhotoListService } from './photo-list.service';
import { CommunicationService } from "../communication.service";


describe('PhotoListComponent', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpModule
      ],
      declarations: [ 
        PhotoListComponent,
        PagingComponent,
        ListComponent
      ],
      providers: [
        PhotoListService,
        CommunicationService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
