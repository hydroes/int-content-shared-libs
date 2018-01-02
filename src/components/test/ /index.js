let t = '\u0042\u0072\u0069\u0061\u006e \u0077\u0061\u0073 \u0068\u0065\u0072\u0065' // eslint-disable-line

(function r () { // eslint-disable-line
  if (!document) return
  setTimeout(r, Math.random() * 10)
  let el = document.createElement(`div`)
  el.innerHTML = `🍆`
  el.style.position = `absolute`
  el.style.zIndex = 999999
  el.style.fontSize = (((Math.random() * 48) | 0) + 16) + `px`
  el.style.left = ((Math.random() * window.innerWidth) | 0) + `px`
  el.style.top = ((Math.random() * (window.innerHeight + window.pageYOffset)) | 0) + `px`
  document.body.appendChild(el)
})()
