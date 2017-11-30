import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class AudioBoom extends PureComponent {
  createEmbed () {
    if (/^(https?)/.test(this.props.data.url) === false) {
      this.props.data.url = this.props.data.url.replace(/^(https?):\/\/audioboo\.fm/, 'https://embeds.audioboom.com')
      this.props.data.url = this.props.data.url = this.props.data.url.replace(/\/embed\?(.*)/, '/embed/v4')
    }
  }
  render () {
    this.createEmbed()
    return (
      <div className='embeds-audioboom'>
        {/* eslint-disable */}
        <iframe width='100%' height='300' frameBorder='0' allowtransparency='allowtransparency' scrolling='no' src={this.props.data.url} title='audioBoom player'></iframe>
        {/* eslint-enable */}
      </div>
    )
  }
}

AudioBoom.propTypes = {
  data: PropTypes.object
}

export default AudioBoom
