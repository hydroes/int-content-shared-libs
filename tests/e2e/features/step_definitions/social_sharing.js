const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')

const domElements = {
  container: '#social-sharing',
  facebook: '#social-sharing > .social-sharing .article-social-share-facebook > a',
  twitter: '#social-sharing > .social-sharing .article-social-share-twitter > a',
  whatsapp: '#social-sharing > .social-sharing  .article-social-share-whatsapp > a'
}
/*eslint-disable */
let handle = {} // @todo 
/* eslint-enable */
let self = null

defineSupportCode(({Given, Then, When}) => {
  Given('I open the shared components page to view Social Sharing icons', async () => {
    await client.globals.goToComponentPage(client, domElements.container, 'ui')
  })
  Then(/^Facebook's data-social-share-url attribute url is "([^"]*)"$/, async (url) => {
    await client.expect.element(domElements.facebook).to.have.attribute('data-social-share-url').which.equals(url)
  })
  Then(/^Clicked on the Facebook icon to open a new tab with a url of "([^"]*)"$/, async (url) => {
    await client.click(domElements.facebook)
    await client.window_handles(function (result) {
      self = this
      handle = result.value[1]
    })
    await client.switchWindow((handle, result) => {
      self.url(result => {
        self.assert.equal(result.value, url, 'Facebook URL matches')
      })
    })
  })
  Then(/^Twitter's data-social-share-url attribute url is "([^"]*)"$/, async (url) => {
    await client.expect.element(domElements.twitter).to.have.attribute('data-social-share-url').which.equals(url)
  })
  Then(/^Clicked on the Twitter icon to open a new tab with a url of "([^"]*)"$/, async (url) => {
    await client.click(domElements.twitter)
    await client.window_handles(function (result) {
      self = this
      handle = result.value[1]
    })
    await client.switchWindow((handle, result) => {
      self.url(result => {
        self.assert.equal(result.value, url, 'Twitter URL matches')
      })
    })
  })
  Then(/^Whatsapp's href link is "([^"]*)"$/, async (url) => {
    await client.expect.element(domElements.whatsapp).to.have.attribute('href').which.equals(url)
  })
})
