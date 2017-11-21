# Bauer shared web components

[![npm version](https://badge.fury.io/js/bauer-shared-web-components.svg)](https://badge.fury.io/js/bauer-shared-web-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

##

Shared bauer shared components npm module
This npm module is meant to be included in a dadi web front end instance.

The shared components can be previewed here:
[shared components](http://shared-libs.onebauer.media/)

## Project structure
- components (each directory within is an individual component)
- dist (stores the compiled dust/js/sass that are pulled into other projects)
- lib (specific helpers and code for this npm module)

## Installation
npm install


## Development
Run:
npm start

# Project structure:

```
├── build - Devops build and deploy code
├── dist - This is a copy of the src directory the difference is js code is transpiled from ecma2015 down
├── public - static assets dir
├── src - source code directory
│   ├── component_helpers
│   ├── components - components folder
│   ├── components_data
│   ├── libs - libs used to retrieve and compile components and assets etc
│   └── server
│       └── views
│           └── partials
└── tests
    ├── e2e
    │   ├── config
    │   ├── features
    │   │   └── step_definitions
    │   ├── page_objects
    │   └── reports - html reports dir
    ├── reports
    │   └── e2e
    └── unit - unit tests
```

# components
When modifying templates/js/sass they are automatically compiled to templates/dist
a component in its entirety lives in a aptly named folder in the components dir.

A component needs at a minimium to have 3 files within its folder:

- style.scss (sass file)
- JSX template file named after the parent folder (suffixed with `.js`)
    - each parent node rendered requires an id attribute assigned as
    e.g..
    ```
        return (
            <div id={this.props.componentId}>
                ...
            </div>
        )
    ```

# commits must follow the following es standard:
([commit message standard]) https://github.com/willsoto/validate-commit/blob/master/conventions/eslint.md

## Testing
Testing and qa in the project encompass unit and e2e tests.
Tests can be found in the tests directory.
 - e2e tests are written in gerkin syntax and follow cucumber methodology
 - selenium and java are not required to run the tests
 - Test examples can be found ([here](https://github.com/mucsi96/nightwatch-cucumber/tree/master/examples))
 - To run a specific test feature file: npm run e2e-tests tests/e2e/features/test.feature
Test reports can be found:
 - [e2e](https://bauerxcel.github.io/int-content-shared-libs/dist/reports/e2e/index.html)

- To run e2e tests: (ensure the files are being served, run npm start on local)
npm run e2e-tests
- To run unit tests:
npm run unit-tests

# Test tools
([chrome-addon for nightwatchjs]https://github.com/vvscode/js--nightwatch-recorder)

## Deployment
- Update the version number in the package.json ([SemVer](http://semver.org/))
- npm start (Do not forget to compile the components to the dist dir)
- npm publish


To include a template create a helper for it in the FE project:
```
@todo: this needs to be refactored as we are now using pug templates
```


## Versioning

SemVer is used [SemVer](http://semver.org/) for versioning.

## Authors

* **Brian Gouws** - *Initial work* - [hydroes](https://github.com/hydroes)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


