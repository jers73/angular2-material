import { RodolphPage } from './app.po';

describe('rodolph App', function() {
  let page: RodolphPage;

  beforeEach(() => {
    page = new RodolphPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rodolph works!');
  });
});
