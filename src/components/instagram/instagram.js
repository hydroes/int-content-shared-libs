'use strict'

import React from 'React'
import PropTypes from 'prop-types'
import $ from 'jquery'

class Instagram extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      oembedUrl: this.props.data.url,
      oembedHtml: this.props.data.url
    }
  }

  componentDidMount () {
    $('.embeds-instagram').each(function () {
      var _self = $(this)
      var oembedUrl = 'https://api.instagram.com/oembed?url=' + _self.data('embed-id')
      $.ajax({
        url: oembedUrl,
        dataType: 'jsonp',
        success: function (data) {
          _self.html(data.html)
        },
        error: function (result) {
          console.log('Instagram oembed error!')
        }
      })
    })
  }

  render () {
    const { componentId } = this.props
    const { oembedUrl, oembedHtml } = this.state
    return (
      <div id={componentId} data-embed-id={oembedUrl} className='embeds-instagram'>
        <a href={oembedUrl}>{oembedHtml}</a>
      </div>)
  }
}

Instagram.propTypes = {
  componentId: PropTypes.string,
  data: PropTypes.shape({
    url: PropTypes.string
  })
}

export default Instagram
