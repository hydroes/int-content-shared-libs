const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')

const container = '.large-content-card'
const imgAttr = container + ' .content-card--large__link picture'
const title = container + ' .content-card--large__info span.title a'
const category = container + ' .content-card--large__info a.brand-color'

defineSupportCode(({Given, Then, When}) => {
  Given('I open the shared components page to view a large card', (done) => {
    client.globals.goToComponentPage(client, '.large-content-card')
    done()
  })

  Then(/^the large image url is "([^"]*)"$/, (url, done) => {
    client.expect.element(imgAttr + ' img').to.have.attribute('srcset').which.equals(url)
    done()
  })

  Then(/^the alt text is "([^"]*)"$/, (alt, done) => {
    client.expect.element(imgAttr + ' img').to.have.attribute('alt').which.contains(alt)
    done()
  })

  Then(/^the title text is "([^"]*)"$/, (text, done) => {
    client.expect.element(title).text.to.equal(text)
    done()
  })

  Then(/^the title link is "([^"]*)"$/, (link, done) => {
    client.expect.element(title).to.have.attribute('href').which.contains(link)
    done()
  })

  Then(/^the category url is "([^"]*)"$/, (link, done) => {
    client.expect.element(category).to.have.attribute('href').which.contains(link)
    done()
  })

  Then(/^the category name is "([^"]*)"$/, (text, done) => {
    client.expect.element(category).text.to.equal(text)
    done()
  })

  Then(/^the category name is "([^"]*)" and the date is "([^"]*)"$/, (cat, date, done) => {
    client.expect.element('.large-content-card .content-card--large__info span.hidden-xs.modified-container').text.to.equal(cat + date)
    done()
  })

  Given(/^the shared components page is open in mobile view, the small image url is "([^"]*)"$/, (url, done) => {
    client.expect.element(imgAttr + ' source').to.have.attribute('srcset').which.contains(url)
    done()
  })
})
