import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { LightBoxDetailsComponent } from './light-box-details.component';

import { LightBoxService } from './light-box.service';
import { CommunicationService } from "../communication.service";
import { RequestMakerService } from "../request-maker/request-maker.service";


describe('LightBoxDetailsComponent', () => {
  let component: LightBoxDetailsComponent;
  let fixture: ComponentFixture<LightBoxDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ LightBoxDetailsComponent ],
      providers:[
        LightBoxService,
        CommunicationService,
        RequestMakerService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightBoxDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
