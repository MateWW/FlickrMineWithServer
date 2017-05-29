import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { LightBoxPhotoComponent } from './light-box-photo.component';

import { LightBoxService } from './light-box.service';
import { CommunicationService } from "../communication.service";


describe('LightBoxPhotoComponent', () => {
  let component: LightBoxPhotoComponent;
  let fixture: ComponentFixture<LightBoxPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ LightBoxPhotoComponent ],
      providers:[
        LightBoxService,
        CommunicationService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightBoxPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
