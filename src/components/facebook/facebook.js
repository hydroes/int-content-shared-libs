'use strict'

import React from 'React'
import PropTypes from 'prop-types'
const $ = require('jquery')

class Facebook extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      oembedUrl: this.props.data.url,
      oembedHtml: this.props.data.url
    }
  }

  componentDidMount () {
    $('.embed--facebook').each(function () {
      var _self = $(this)
      var oembedUrl = 'https://www.facebook.com/plugins/post/oembed.json/?url=' + _self.data('embed-id')
      $.ajax({
        url: oembedUrl,
        dataType: 'jsonp',
        success: function (data) {
          // _self.html(data.html)
          console.log('-------------fb response', data)
          this.setState({oembedHtml: data.html})
        },
        error: function (result) {
          console.log('-------error', result)
        }
      })
    })
  }

  render () {
    const componentId = this.props.componentId
    const oembedUrl = this.state.oembedUrl
    const oembedHtml = this.state.oembedHtml
    return (
      <div id={componentId} data-embed-id='{oembedUrl}' className='embed--facebook'>
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
