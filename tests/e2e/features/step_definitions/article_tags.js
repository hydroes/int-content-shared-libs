const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')
const domElements = {
  container: '#tags',
  tags: '#tags ul li'
}

defineSupportCode(({Given, Then, When}) => {
  Given('I open the shared components page to view Article Tags', async () => {
    await client.globals.goToComponentPage(client, domElements.container, 'ui')
  })
  Then(/^there are ([0-9]+) tags, which all have URLs/, async (amount) => {
    for (let i = 1; i === amount; i++) {
      await client.expect.element(domElements.tags + ' a').to.have.attribute('href')
    }
  })

  Then(/^the tag's text are "([^"]*)"$/, async (textFromTags) => {
    let tags = textFromTags.replace(/and/ig, ',').split(',')
    for (let a = 0; a < tags.length; a++) {
      if (typeof tags[a] === 'string') {
        tags[a] = tags[a].trim()
      }
      let cssIdx = a + 1
      await client.expect.element(domElements.tags + ':nth-child(' + cssIdx + ') a').text.to.equal(tags[a])
    }
  })
})
