'use strict'

import React from 'react'
import PropTypes from 'prop-types'

class Twitter extends React.Component {
  componentDidMount () {
    window.twttr = (function (d, s, id) {
      var js
      var fjs = d.getElementsByTagName(s)[0]
      var t = window.twttr || {}
      if (d.getElementById(id)) return t
      js = d.createElement(s)
      js.id = id
      js.src = 'https://platform.twitter.com/widgets.js'
      fjs.parentNode.insertBefore(js, fjs)
      t._e = []
      t.ready = function (f) {
        t._e.push(f)
      }
      return t
    }(document, 'script', 'twitter-wjs'))
  }

  render () {
    const componentId = this.props.componentId
    const url = this.props.data.url
    return (
      <div id={componentId} className='embeds-twitter'>
        <blockquote className='twitter-tweet'><a href={url} /></blockquote>
      </div>
    )
  }
}

Twitter.propTypes = {
  componentId: PropTypes.string,
  data: PropTypes.shape({
    url: PropTypes.string
  })
}

export default Twitter
