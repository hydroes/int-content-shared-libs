'use strict'

import React from 'react'
import { hydrate } from 'react-dom'

// add desired required components to ensure files are included in the component bootstrap
import Test from './test/test'
import Twitter from './twitter/twitter'
import Facebook from './facebook/facebook'
import Instagram from './instagram/instagram'

const components = window.bootstrapComponents || []
for (let i in components) {
  let component = components[i]

  let componentElement = document.getElementById(component.id)
  if (!componentElement) {
    continue
  }

  switch (component.name) {
    case 'test':
      hydrate(<Test {...component.data} />, componentElement)
      break
    case 'twitter':
      hydrate(<Twitter {...component.data} />, componentElement)
      break
    case 'facebook':
      hydrate(<Facebook {...component.data} />, componentElement)
      break
    case 'instagram':
      hydrate(<Instagram {...component.data} />, componentElement)
      break
  }
}

// require('./social_sharing')(window)
// bootstrap bauerSharedLibs
window.bauerSharedLibs = window.bauerSharedLibs || {}
window.bauerSharedLibs.version = require('../../package').version
