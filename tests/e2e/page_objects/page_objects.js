// please read the following:
// http://nightwatchjs.org/guide/#page-objects
// https://martinfowler.com/bliki/PageObject.html

module.exports = {
  elements: {
    searchBar: {
      selector: 'input[type=text]'
    },
    submit: {
      selector: '//[@name="q"]',
      locateStrategy: 'xpath'
    }
  }
}
/*
To use this page object:

var google = client.page.google();

    google.navigate()
      .assert.title('Google')
      .assert.visible('@searchBar')
      .setValue('@searchBar', 'nightwatch')
      .click('@submit');

    client.end()
*/
