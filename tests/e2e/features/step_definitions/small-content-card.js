const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')
const smallCard = {
  container: '.content-card--small',
  info: '.content-card--small .content-card--small__info',
  picture: '.content-card--small .img-container > picture'
}

const home = client.globals.getComponentsPageUrl()
defineSupportCode(({ Given, Then, When }) => {
  Given('I open the shared components page locally', () => {
    client.resizeWindow(2000, 1200) //  ensure desktop size
    return client.url(home)
      .waitForElementVisible(smallCard.container, 3000)
  })
  Then(/^the card has a title text of "([^"]*)"$/, (text) => {
    return client.expect.element(smallCard.info + ' .title a').text.to.equal(text)
  })

  Then(/^the card has a date-time of "([^"]*)" and a category of "([^"]*)"$/, (date, category) => {
    return client.expect.element(smallCard.info + ' .modified-container').text.to.equal(category + date)
  })

  Then(/^the card has images displayed correctly with from cdn host "([^"]*)"$/, (host) => {
    let expect = client.expect.element
    return expect(smallCard.picture + ' img').to.have.attribute('src').which.contains(host) &&
     expect(smallCard.picture + ' source').to.have.attribute('srcset').which.contains(host)
  })
})
