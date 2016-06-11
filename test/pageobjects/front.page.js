var page = require('./page')

var checkboxPage = Object.create(page, {
  /* define elements */
  logoutLink: {
    get: function() {
      return browser.elements('[href*=logout]');
    }
  },
  openPanel: {
    get: function() {
      return browser.elements('.open-panel');
    }
  },
  publicList: {
    get: function() {
      return browser.elements('[href*=list]');
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
