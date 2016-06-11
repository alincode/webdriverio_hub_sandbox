var page = require('./page')

var checkboxPage = Object.create(page, {
  /* define elements */
  title: {
    get: function() {
      return browser.elements('.login-screen-title');
    }
  },
  identifier: {
    get: function() {
      return browser.elements('[name=identifier]');
    }
  },
  password: {
    get: function() {
      return browser.elements('[name=password]');
    }
  },


  /* define or overwrite page methods */
  // open: {
  //   value: function() {
  //     page.open.call(this, 'checkboxes');
  //   }
  // }
});

module.exports = checkboxPage
