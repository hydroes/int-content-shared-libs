const $ = require('jquery')

module.exports = function () {
  //  TODO: Take out `ajaxStop` wrapper on deployment, as this only there for demo site
  $(document).ajaxStop(function () {
    $('.large-narrow').matchHeight()
  })
}
