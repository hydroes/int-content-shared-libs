import React from 'react'
import PropTypes from 'prop-types'

class YouTube extends React.PureComponent {
  render () {
    let url = this.props.data.url
    if (/watch\?v=/.test(url)) {
      const videoID = url.split('watch?v=')[1]
      url = 'https://youtube.com/embed/' + videoID + '?rel=0'
    }
    return (
      <div className='embeds-youtube'>
        <iframe src={url} allowFullScreen='true'></iframe>
      </div>
    )
  }
}
YouTube.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string
  })
}

export default YouTube
