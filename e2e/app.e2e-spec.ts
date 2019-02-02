import { DeveloperDojoPage } from './app.po';

describe('developer-dojo App', () => {
  let page: DeveloperDojoPage;

  beforeEach(() => {
    page = new DeveloperDojoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
