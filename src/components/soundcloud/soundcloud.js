import React from 'react'
import PropTypes from 'prop-types'

class Soundcloud extends React.PureComponent {
  render () {
    let url = this.props.data.url
    if (/^(https?):\/\/soundcloud.com\//.test(url)) {
      url = 'https://w.soundcloud.com/player/?url=' + url
    }
    return (
      <div className='embeds-soundcloud'>
        <iframe src={url} allowFullScreen='true' frameBorder='0' />
      </div>
    )
  }
}

Soundcloud.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string
  })
}

export default Soundcloud
