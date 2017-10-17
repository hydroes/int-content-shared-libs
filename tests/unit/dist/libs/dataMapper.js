'use strict'
/* globals describe, it */

const chai = require('chai')
const assert = chai.assert
const dataMapper = require('../../../../dist/libs/dataMapper')

describe('Test data mapper', function () {
  it('Throws an error when no mapping file found', function () {
    assert.throws(() => dataMapper('non-existent-mapper'), Error, 'Map file not found: ')
  })
})
