module.exports = {
    'Basic google test' : function (browser) {
      browser
        .url('http://www.google.com/')
        .waitForElementVisible('body')
        .verify.titleContains('Google')
        .end();
    }
  };