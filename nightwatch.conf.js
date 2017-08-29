const chromedriver = require('chromedriver')

require('nightwatch-cucumber')({
  closeSession: 'afterFeature',
  cucumberArgs: [
    '--compiler', 'js:babel-core/register',
    '--require', 'tests/e2e/config/hooks.js',
    '--require', 'tests/e2e/features/step_definitions',
    '--format', 'json:tests/e2e/reports/cucumber.json',
    'tests/e2e/features'
  ]
})

module.exports = {
  globals_path: 'tests/e2e/config/globals.js',
  page_objects_path: 'tests/e2e/page_objects',
  test_workers: true,
  detailed_output: false,
  selenium: {
    start_process: false,
    log_path: 'tests/logs.txt',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': chromedriver.path
    }
  },
  test_settings: {
    default: {
      selenium_port: 9515,
      selenium_host: 'localhost',
      default_path_prefix: '',
      screenshots: {
        enabled: false,
        on_failure: true,
        path: 'tests/e2e/screenshots'
      },
      desiredCapabilities: {
        browserName: 'chrome',
        acceptInsecureCerts: true,
        javascriptEnabled: true
      }
    }
  }
}
