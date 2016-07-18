import { Angular2PongNgCliPage } from './app.po';

describe('angular2-pong-ng-cli App', function() {
  let page: Angular2PongNgCliPage;

  beforeEach(() => {
    page = new Angular2PongNgCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
