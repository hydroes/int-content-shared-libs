'use strict'
// import path from 'path'
// import _ from 'lodash'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import componentsRegister from './componentsRegister'

// import and assign all components
let componentsRegisterLength = componentsRegister.length
let Components = []
for (let i = 0; i < componentsRegisterLength; i++) {
  try {
    // synchrounously require components, do this until new import supports dynamic loading
    Components[componentsRegister[i].name] = require(componentsRegister[i].path).default
  } catch (error) {}
}
// finds and renders a react component
module.exports = function (ComponentName, data = {}) {
  let Component
  let html = ''

  // test if component found
  if (Components[ComponentName] === undefined) {
    // @todo add error throwing back in
    // throw new Error('Component not found: ', ComponentName)
    return `!!Component: "${ComponentName}" NOT reactified!!`
  }

  try {
    Component = React.createElement(Components[ComponentName], data)
  } catch (error) {
    throw new Error('Component is not a valid component: ', ComponentName)
  }

  html = ReactDOMServer.renderToString(Component)
  return html
}
