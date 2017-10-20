'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  // convert https://giphy.com/gifs/string_description-xGIPHYID formats
  if (url.indexOf('/gifs/') !== -1 && url.substr(url.lastIndexOf('-'))) {
    url = url.replace('/gifs/', '/embed/');
    var giphyId = url.substr(url.lastIndexOf('-') + 1);
    var giphyUrl = url.substr(0, url.lastIndexOf('/') + 1);
    url = giphyUrl + giphyId;
  }

  // convert https://media.giphy.com/media/YAv1nFIJc38hW/giphy.gif
  if (url.indexOf('/media/') !== -1 && url.substr(url.lastIndexOf('/giphy.gif'))) {
    url = url.replace('/media/', '/embed/');
    url = url.replace('media.giphy.com', 'giphy.com');
    url = url.substr(0, url.lastIndexOf('/giphy.gif'));
  }

  return url;
};