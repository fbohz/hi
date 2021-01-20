import { HairbnbPage } from './app.po';

describe('hairbnb App', () => {
  let page: HairbnbPage;

  beforeEach(() => {
    page = new HairbnbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
