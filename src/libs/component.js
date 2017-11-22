'use strict'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import componentsRegister from './componentsRegister'
import uniqueId from 'lodash/uniqueId'

// import and assign all components
let componentsRegisterLength = componentsRegister.length
let Components = []
let env = process.env.NODE_ENV || 'dev'
for (let i = 0; i < componentsRegisterLength; i++) {
  try {
    // synchrounously require components, do this until new import supports dynamic loading
    Components[componentsRegister[i].name] = require(componentsRegister[i].path).default
  } catch (error) {
    console.error(componentsRegister[i].name + ' - ' + error)
  }
}
// finds and renders a react component
module.exports = function (ComponentName, data = {}) {
  let Component
  let html = ''

  // test if component found
  if (Components[ComponentName] === undefined) {
    // only throw error on dev env, return empty string in production
    if (env === 'dev') {
      throw new Error('Component not found: ', ComponentName)
    }
    console.error('Component not found: ', ComponentName)
  }
  let componentId = uniqueId('bauerComponentId_')
  let mergedData = Object.assign({}, data, {componentId: componentId})

  try {
    Component = React.createElement(Components[ComponentName], mergedData)
  } catch (error) {
    if (env === 'dev') {
      throw new Error('Component is not a valid component: ', ComponentName)
    }
    console.log('Component is not a valid component: ', ComponentName)
  }

  let clientBoostrapData = {
    id: componentId,
    name: ComponentName,
    data: mergedData
  }

  let bootstrapClientSideScript = `<script>
    window.bootstrapComponents = window.bootstrapComponents || [];
    window.bootstrapComponents.push(${JSON.stringify(clientBoostrapData)})
    </script>`

  html = ReactDOMServer.renderToString(Component) + bootstrapClientSideScript

  return (html)
}
