describe('auth', function() {
  it('go to login page', function(done) {
    browser.url('/');
    browser.click('.open-panel');
    browser.click('.panel-close');
    browser.waitForExist('[name=identifier]');
    browser.getText('.login-screen-title').should.be.equal('Login');

  });

  it('input login data and submit from', function(done) {
    browser.elements('[name=identifier]').setValue('demo');
    browser.elements('[name=password]').setValue('11111111');
    browser.click('[type=submit]');
    browser.isExisting('[name=identifier]', false).should.be.equal(true);;
  });

  it('check login successful', function(done) {
    browser.pause(2000);
    browser.click('.open-panel');
    browser.waitForExist('[href*=logout]');
    browser.isExisting('[href*=logout]').should.be.equal(true);
  });
});
