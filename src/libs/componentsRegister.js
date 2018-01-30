'use strict'

const { readdirSync, statSync, existsSync } = require('fs')
const { join } = require('path')

const componentsPath = `${__dirname}/../components/`

const getComponentScriptPath = (path, name) => {
  return `${join(path, name, name)}.js`
}
const registerComponents = (path = componentsPath) => {
  const dirContents = readdirSync(path)
  let components = []
  for (const file of dirContents) {
    const filePath = join(path, file)
    const fileInfo = statSync(filePath)
    if (!fileInfo.isDirectory()) {
      continue
    }
    const jsFilePath = getComponentScriptPath(path, file)
    if (existsSync(jsFilePath)) {
      components.push({
        name: file,
        path: jsFilePath
      })
    }
  }
  return components
}

export default registerComponents()
