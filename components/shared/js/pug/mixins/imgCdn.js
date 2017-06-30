'use strict'
var _ = require('underscore')

module.exports = function (data, settings) {
  var result = ''
  settings = settings || {}
  data = data || {}

  if (!data.asset) {
    return result
  }

  // See: https://github.com/dadi/cdn/blob/docs/docs/workingWithImages.md

  // domain and quality (including other defaults) can be set in
  // config/config.{env}.json
  var protocol = settings.protocol
  var domain = settings.imageDomain
  var quality = settings.imageQuality
  var asset = data.asset

  var template = '{protocol}{domain}/{path}/{fileName}'
  template = template.replace('{protocol}', protocol)
  template = template.replace('{domain}', domain)
  template = template.replace('{path}', asset.path || '')
  template = template.replace('{fileName}', encodeURIComponent(asset.fileName) || '')

  var options = [
    'quality',
    'trim',
    'trimFuzz',
    'width',
    'height',
    'cropX',
    'cropY',
    'ratio',
    'devicePixelRatio',
    'gravity',
    'filter',
    'blur',
    'strip',
    'rotate',
    'flip',
    'srcData',
    'resizeStyle'
  ]

  var cropDimensions
  // check of there is crop data associated with this image
  if (data.cropData && data.cropType) {
    // workout which crop 'tag' to use
    var searchCriteria = {'_field': data['cropType']}
    var cropInfo = _.findWhere(data['cropData'], searchCriteria)

    // crop data can be passed directly to this method as it comes from different
    // formats from the api
    if (!cropInfo) {
      var potentialImageData = _.first(data['cropData'])
      if (potentialImageData && potentialImageData['_image']) {
        cropInfo = potentialImageData
      }
    }

    if (typeof cropInfo === 'object' && cropInfo !== null) {
      // workout crop dimensions
      cropDimensions = []
      cropDimensions['top'] = parseInt(cropInfo.y)
      cropDimensions['left'] = parseInt(cropInfo.x)
      cropDimensions['bottom'] = parseInt(cropInfo.y + cropInfo.height)
      cropDimensions['right'] = parseInt(cropInfo.x + cropInfo.width)

      // add crop data to options
      options.push('crop')
    }
  }

  // if this is set, then only data that are set are in put in the image url
  // eg if width is set then the url built will be:
  // http://cdn.example.com/path/to/file.jpg?width=100

  var separator = '?'
  var separated = false
  var len = options.length

  for (var i = 0; i < len; i++) {
    var option = data[options[i]]

      // basically if crop data exists then add it and dont overwrite the orig
      // option if it was passed
    if (options[i] === 'crop' &&
      option === undefined) {
      option = cropDimensions['top'] + ',' + cropDimensions['left'] + ',' + cropDimensions['bottom'] + ',' + cropDimensions['right']
    }

      // default image quality
    if (options[i] === 'quality' &&
      option === undefined) {
      option = quality
    }

    if (option !== undefined) {
      if (separated === true) separator = '&'
      template += separator + options[i] + '={' + option + '}'
      template = template.replace('{' + option + '}', option)
      separated = true
    }
  }

    // if cropdata exists then add the resize flag on
  if (typeof cropDimensions !== 'undefined') {
    template += '&resize=crop'
  }
  template += '&format=jpg'

  result = template

  /*
  '?format={format}' +            // jpg, png, json
-     '&quality={quality}' +            // 0-100
-     '&trim={trim}' +              // 0-1
-     '&trimFuzz={trimFuzz}' +          // 0-1
-     '&width={width}' +              // (pixels) integer
-     '&height={height}' +            // (pixels) integer
-     // '&crop-x={crop-x}' +              removed because data obsolete
-     // '&crop-y={crop-y}' +             // removed because data obsolete
-     '&ratio={ratio}' +              // e.g. 1-1, 4-3, 16-9, 21-9
-     '&devicePixelRatio={devicePixelRatio}' +  // 0, 1, 2, 3
-     '&gravity={gravity}' +            // [all compass bearings], center, none
-     '&filter={filter}' +            // 0, Lagrange, Lanczos
-     '&blur={blur}' +              // int
-     '&strip={strip}' +              // bool
-     '&rotate={rotate}' +            // 0-359
-     '&flip={flip}' +                // bool
-     '&srcData={srcData}' +            // TBC (docs say: "Path to the source file")
-     '&resizeStyle={resizeStyle}' +        // 'aspectfill', 'aspectfit', 'fill', 'crop'

  http://bauer.radio.test.cdn.dadi.technology//?format=jpg&quality=80&trim=0&trimFuzz=0&width=0&height=0&crop-x=0&crop-y=0&ratio=0&devicePixelRatio={devicePixelRatio}&gravity=0&filter=0&blur=0&strip=0&rotate=0&flip=0&srcData={srcData}
  */

  return result
}
