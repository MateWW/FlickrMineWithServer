import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http'
import { PhotoListModule } from './list/photo-list.module';
import { SearchModule } from './search/search.module';
import { LightBoxModule } from "./light-box/light-box.module";

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PhotoListModule,
        SearchModule,
        LightBoxModule,
        HttpModule        
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Flickr Gallery');
  }));
});
