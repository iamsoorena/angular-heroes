import { AngularHeroesTutPage } from './app.po';

describe('angular-heroes-tut App', function() {
  let page: AngularHeroesTutPage;

  beforeEach(() => {
    page = new AngularHeroesTutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
