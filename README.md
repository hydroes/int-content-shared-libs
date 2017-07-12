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


## Development
Run:
npm start

# components
When modifying templates/js/sass they are automatically compiled to templates/dist
a component in its entirety lives in a aptly named folder in the components dir.

A component needs at a minimium to have 3 files within its folder:
- index.js (js stored here and can be required)
- style.scss (sass file)
- pug template file named after the parent folder

# helpers
- helpers are stored in the helpers folder
- 1 helper should be contained in 1 file in the helpers folder

# commits must follow the following es standard:
([commit message standard]) https://github.com/willsoto/validate-commit/blob/master/conventions/eslint.md

## Testing
Testing and qa in the project encompass unit and e2e tests.
Tests can be found in the tests directory.
 - e2e tests are written in gerkin syntax and follow cucumber methodology
 - e2e tests use the chrome driver to run tests, chrome needs to be installed in the OS
 - selenium and java are not required to run the tests
 - Test examples can be found ([here](https://github.com/mucsi96/nightwatch-cucumber/tree/master/examples))
Test reports can be found in the tests/reports directory.

- To run e2e tests:
npm run e2e-tests
- To run unit tests:
npm run unit-tests

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


