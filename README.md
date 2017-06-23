# Bauer shared web components

Shared bauer shared components npm module
This npm module is meant to be included in a dadi web front end instance.

The shared components can be previewed here:
[shared components](https://bauerxcel.github.io/int-content-shared-libs/)

## Project structure
- components (each directory within is an individual component)
- dist (stores the compiled dust/js/sass that are pulled into other projects)
- lib (specific helpers and code for this npm module)

## Installation
npm install
bower install


## Development
Run:
npm start

# components
When modifying templates/js/sass they are automatically compiled to templates/dist
a component in its entirety lives in a aptly named folder in the components dir.

A component needs at a minimium to have 3 files within its folder:
- index.js (js stored here and can be required)
- style.scss (sass file)
- dust template file named after the parent folder

# helpers
- helpers are stored in the helpers folder
- 1 helper should be contained in 1 file in the helpers folder


## Deployment
- Update the version number in the package.json ([SemVer](http://semver.org/))
- npm start (Do not forget to compile the components to the dist dir)
- npm publish


To include a template create a helper for it in the FE project:
```
# sampleHelper.js
var dust = require('dustjs-linkedin')
var templatesShare = require('bauer-shared-templates').Templates(dust)

/**
 * Shared template component helper
 */
'use strict'

var dust = require('@dadi/web').Dust
var templatesShare = require('bauer-shared-web-components').Templates(dust)

dust.getEngine().helpers.testy = function (chunk, context, bodies, params) {
  var template = templatesShare.get('test', {'name': 'Brian'})

  return chunk.map(function (chunk) {
    template.then(function (res) {
      return chunk.end(res)
    })
  })
}

```


## Versioning

SemVer is used [SemVer](http://semver.org/) for versioning.

## Authors

* **Brian Gouws** - *Initial work* - [hydroes](https://github.com/hydroes)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


