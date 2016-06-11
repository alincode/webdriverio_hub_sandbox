import LoginPage from '../pageobjects/login.page';
import FrontPage from '../pageobjects/front.page';

describe('auth', function() {
  describe('login success process', function() {
    it('go to login page', function(done) {
      browser.url('/');
      browser.click('.open-panel');
      browser.click('.panel-close');
      LoginPage.identifier.waitForExist();
      LoginPage.title.getText().should.be.equal('Login');
    });

    it('input login data and submit from', function(done) {
      LoginPage.identifier.setValue('demo');
      LoginPage.password.setValue('11111111');
      browser.click('[type=submit]');
      browser.pause(2000);
      FrontPage.publicList.isExisting().should.be.equal(true);
    });

    it('check login successful', function(done) {
      browser.click('.open-panel');
      FrontPage.logoutLink.isExisting().should.be.equal(true);
    });
  });
});
