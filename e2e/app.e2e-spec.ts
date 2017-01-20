import { AintIFunnyPage } from './app.po';

describe('aint-ifunny App', function() {
  let page: AintIFunnyPage;

  beforeEach(() => {
    page = new AintIFunnyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
