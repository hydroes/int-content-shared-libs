const nightwatchCucumber = require('nightwatch-cucumber')

const nightwatchCucumberConf = {
  runner: 'nightwatch',
  closeSession: 'afterFeature',
  'test_workers': true,
  cucumberArgs: [
    '--require', './tests/e2e/hooks.js',
    '--require',
    './tests/e2e/features/step_definitions',
    './tests/e2e/features'
  ]
}

const nightCumber = nightwatchCucumber(nightwatchCucumberConf)

module.exports = {
  'src_folders': [nightCumber],
  'output_folder': './tests/reports',
  'globals_path': './tests/e2e/globals.js',
  'selenium': {
    'start_process': false,
    'log_path': '',
    'port': 4444,
    'cli_args': {
    }
  },
  'test_settings': {
    'default': {
      'selenium_port': 9515,
      'selenium_host': 'localhost',
      'default_path_prefix': '',
      'desiredCapabilities': {
        'browserName': 'chrome',
        'chromeOptions': {
          'args': ['--no-sandbox']
        },
        'acceptSslCerts': true
      }
    }
  }
}
