'use strict'

import React from 'React'
import PropTypes from 'prop-types'
import $ from 'jquery'

class Facebook extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      oembedUrl: this.props.data.url,
      oembedHtml: this.props.data.url
    }
    this.element = <div></div>
  }

  componentDidMount () {
    var _self = $(this.element)
    var oembedUrl = 'https://www.facebook.com/plugins/post/oembed.json/?url=' + _self.data('embed-id')
    $.ajax({
      url: oembedUrl,
      dataType: 'jsonp',
      success: function (data) {
        _self.html(data.html)
      }
    })
  }

  render () {
    const { componentId } = this.props
    const { oembedUrl, oembedHtml } = this.state

    return (
      <div id={componentId} data-embed-id={oembedUrl} className='embed--facebook' ref={ (el) => { this.element = el } }>
        <a href={oembedUrl}>{oembedHtml}</a>
      </div>
    )
  }
}

Facebook.propTypes = {
  componentId: PropTypes.string,
  data: PropTypes.shape({
    url: PropTypes.string
  })
}

export default Facebook
