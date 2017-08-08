const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')
const smallCard = {
  container: '.content-card--small',
  info: '.content-card--small .content-card--small__info',
  picture: '.content-card--small .content-card__link > picture'
}

defineSupportCode(({ Given, Then, When }) => {
  Given('I open the shared components page locally', (done) => {
    client.globals.goToComponentPage(client, smallCard.container)
    done()
  })
  Then(/^the card has a title text of "([^"]*)"$/, (text, done) => {
    client.expect.element(smallCard.info + ':first-of-type .title a').text.to.equal(text)
    done()
  })

  Then(/^the card has a date-time of "([^"]*)" and a category of "([^"]*)"$/, (date, category, done) => {
    client.expect.element(smallCard.info + ' .modified-container').text.to.equal(category + date)
    done()
  })

  Then(/^the card has images displayed correctly with from cdn host "([^"]*)"$/, (host, done) => {
    let expect = client.expect.element
    expect(smallCard.picture + ' img').to.have.attribute('src').which.contains(host) &&
    expect(smallCard.picture + ' source').to.have.attribute('srcset').which.contains(host)
    done()
  })
})
