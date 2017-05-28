import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { ListComponent } from './list.component';

import { PhotoListService } from './photo-list.service';
import { CommunicationService } from "../communication.service";
import { RequestMakerService } from "../request-maker/request-maker.service";

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpModule
      ],
      declarations: [ 
        ListComponent 
      ],
      providers: [
        PhotoListService,
        CommunicationService,
        RequestMakerService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
