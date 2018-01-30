'use strict'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import componentsRegister from './componentsRegister'
import uniqueId from 'lodash/uniqueId'
import { Helmet } from 'react-helmet'

// import and assign all components
let Components = componentsRegister || []

for (let i = 0; i < Components.length; i++) {
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
    throw new Error('Component not found: ', ComponentName)
  }
  let componentId = uniqueId('bauerComponentId_')
  let mergedData = Object.assign({}, data, {componentId: componentId})

  try {
    Component = React.createElement(Components[ComponentName], mergedData)
  } catch (error) {
    throw new Error('Component is not a valid component: ', ComponentName)
  }

  let clientBoostrapData = {
    id: componentId,
    name: ComponentName,
    data: mergedData
  }

  // build bootstrap code for the component to be instantiated by clientside react
  let bootstrapClientSideScript = `<script>
    window.bootstrapComponents = window.bootstrapComponents || [];
    window.bootstrapComponents.push(${JSON.stringify(clientBoostrapData)})
    </script>`

  // build component html
  let ComponentHtml = ReactDOMServer.renderToString(Component)
  const helmet = Helmet.renderStatic()
  // if a component has script tags then include it in the response
  let ComponentScript = helmet.script.toString()

  html = ComponentHtml + ComponentScript + bootstrapClientSideScript

  return (html)
}
