'use strict'

/* globals describe, it */
const chai = require('chai')
const assert = chai.assert
var component = require('../../../../dist/libs/component')

describe('Test react component renderer', function () {
  // @todo: add this back in when reactify branch is complete
  // it('Throws an error when component is not found', function () {
  //   assert.throws(() => component('non-existent-component'), Error, 'Component not found: ')
  // })

  it('Returns a string message stating the component is not ready', function () {
    assert.equal(component('non-existent-component'), '!!Component: "non-existent-component" NOT reactified!!')
  })

  it('Returns valid template', function () {
    let comp = component('test')
    assert.equal('string', typeof comp)
    assert.isAbove(comp.length, 1, 'template string not empty')
  })
})
