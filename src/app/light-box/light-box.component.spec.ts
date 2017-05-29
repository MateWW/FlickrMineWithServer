import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { LightBoxComponent } from './light-box.component';
import { LightBoxPhotoComponent } from './light-box-photo.component';
import { LightBoxDetailsComponent } from './light-box-details.component';

import { LightBoxService } from './light-box.service';
import { CommunicationService } from "../communication.service";



describe('LightBoxComponent', () => {
  let component: LightBoxComponent;
  let fixture: ComponentFixture<LightBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ 
        LightBoxComponent,
        LightBoxDetailsComponent,
        LightBoxPhotoComponent
      ],
      providers:[
        LightBoxService,
        CommunicationService

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
