import { MiracleListClientPage } from './app.po';

describe('miracle-list-client App', function() {
  let page: MiracleListClientPage;

  beforeEach(() => {
    page = new MiracleListClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
