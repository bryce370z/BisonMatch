import { BisonMatchPage } from './app.po';

describe('bison-match App', () => {
  let page: BisonMatchPage;

  beforeEach(() => {
    page = new BisonMatchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
