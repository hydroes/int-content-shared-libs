const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')

const imgAttr = '.large-content-card .content-card--large__link picture'
const title = '.large-content-card .content-card--large__info span.title a'
const category = '.large-content-card .content-card--large__info a.brand-color'

defineSupportCode(({Given, Then, When}) => {
  Given('I open the shared components page to view a large card', () => {
    return client.url('http://localhost:3000')
      .waitForElementVisible('.large-content-card', 1000)
  })

  Then(/^the small image url is "([^"]*)"$/, (url) => {
    return client.expect.element(imgAttr + ' source').to.have.attribute('srcset').which.contains(url)
  })

  Then(/^the large image url is "([^"]*)"$/, (url) => {
    return client.expect.element(imgAttr + ' img').to.have.attribute('srcset').which.contains(url)
  })

  Then(/^the alt text is "([^"]*)"$/, (alt) => {
    return client.expect.element(imgAttr + ' img').to.have.attribute('alt').which.contains(alt)
  })

  Then(/^the title text is "([^"]*)"$/, (text) => {
    return client.expect.element(title).text.to.equal(text)
  })

  Then(/^the title link is "([^"]*)"$/, (link) => {
    return client.expect.element(title).to.have.attribute('href').which.contains(link)
  })

  Then(/^the category url is "([^"]*)"$/, (link) => {
    return client.expect.element(category).to.have.attribute('href').which.contains(link)
  })

  Then(/^the category name is "([^"]*)"$/, (text) => {
    return client.expect.element(category).text.to.equal(text)
  })

  Then(/^the date is "([^"]*)" and "([^"]*)"$/, (text, date) => {
    return client.expect.element('.large-content-card .content-card--large__info span.hidden-xs.modified-container').text.to.equal(text + date)
  })
})
