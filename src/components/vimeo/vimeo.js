import React from 'react'
import PropTypes from 'prop-types'

class Vimeo extends React.PureComponent {
  render () {
    let url = this.props.data.url
    if (/\/\/vimeo.com\//.test(url)) {
      var videoID = this.data.url.split('vimeo.com/')[1]
      url = 'https://player.vimeo.com/video/' + videoID
    }
    return (
      <div className='embeds-vimeo'>
        <iframe src={url} allowFullScreen='true'></iframe>
      </div>
    )
  }
}

Vimeo.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string
  })
}

export default Vimeo
