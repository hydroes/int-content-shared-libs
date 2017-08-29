const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')
const smallCard = {
  container: '.content-card--small',
  info: '.content-card--small .content-card--small__info',
  picture: '.content-card--small .content-card__link > picture'
}

defineSupportCode(({ Given, Then, When }) => {
  Given('I open the shared components page locally', async () => {
    await client.globals.goToComponentPage(client, smallCard.container)
  })
  Then(/^the card has a title text of "([^"]*)"$/, async (text) => {
    await client.expect.element(smallCard.info + ':first-of-type .title a').text.to.equal(text)
  })

  Then(/^the card has a date-time of "([^"]*)" and a category of "([^"]*)"$/, async (date, category) => {
    await client.expect.element(smallCard.info + ' .modified-container').text.to.equal(category + date)
  })

  Then(/^the card has images displayed correctly with from cdn host "([^"]*)"$/, async (host) => {
    let expect = client.expect.element
    await expect(smallCard.picture + ' img').to.have.attribute('src').which.contains(host)
    await expect(smallCard.picture + ' source').to.have.attribute('srcset').which.contains(host)
  })
})
