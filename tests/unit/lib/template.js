'use strict'
/* globals describe, it */

const chai = require('chai')
const assert = chai.assert
const template = require('../../../libs/template')

describe('Test template loader', function () {
  it('Works by checking if a string is returned', function () {
    assert.equal('string', typeof template('test'))
  })

  describe('Throws errors when', function () {
    it('Template file not found', function () {
      assert.throws(() => template('non-existent-file'), Error, 'Shared template not found: ')
    })

    it('Invalid param templateData: false', function () {
      assert.throws(() => template('test', false), Error, 'param templateData must be an object')
    })

    it('Invalid param templateData: null', function () {
      assert.throws(() => template('test', null), Error, 'param templateData must be an object')
    })
  })
})
