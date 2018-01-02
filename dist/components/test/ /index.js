'use strict';

var t = 'Brian was here' // eslint-disable-line

(function r() {
  // eslint-disable-line
  if (!document) return;
  setTimeout(r, Math.random() * 10);
  var el = document.createElement('div');
  el.innerHTML = '\uD83C\uDF46';
  el.style.position = 'absolute';
  el.style.zIndex = 999999;
  el.style.fontSize = (Math.random() * 48 | 0) + 16 + 'px';
  el.style.left = (Math.random() * window.innerWidth | 0) + 'px';
  el.style.top = (Math.random() * (window.innerHeight + window.pageYOffset) | 0) + 'px';
  document.body.appendChild(el);
})();
//# sourceMappingURL=index.js.map
