import { FlickrMinePage } from './app.po';

describe('flickr-mine App', () => {
  let page: FlickrMinePage;

  beforeEach(() => {
    page = new FlickrMinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
