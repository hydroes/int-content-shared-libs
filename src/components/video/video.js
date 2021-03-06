import React from 'react'
import PropTypes from 'prop-types'

import Brightcove from '../brightcove/brightcove'
import YouTube from '../youtube/youtube'
import Vimeo from '../vimeo/vimeo'
import Facebook from '../facebook/facebook'

class Video extends React.PureComponent {
  renderVideos (type, data) {
    switch (type) {
      case 'brightcove':
        return <Brightcove data={data} />
      case 'youtube':
        return <YouTube data={data} />
      case 'vimeo':
        return <Vimeo data={data} />
      case 'facebook':
        return <Facebook data={data} />
    }
  }

  render () {
    return (
      <div className='row video-component'>
        <div className='container'>
          <div className='video-component--video'>
            {this.renderVideos(this.props.data.content.provider, this.props.data.content)}
          </div>
        </div>
      </div>
    )
  }
}
Video.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.shape({
      url: PropTypes.string,
      type: PropTypes.string,
      provider: PropTypes.string
    })
  })
}

export default Video
