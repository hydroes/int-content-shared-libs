import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Brightcove extends PureComponent {
  createEmbed () {
    this.props.data.url = this.props.data.url.replace('http://', '//')
    this.props.data.url = this.props.data.url.replace('https://', '//')
    return (
      <div>
        {/* eslint-disable */}
        <iframe frameBorder='0' allowtransparency='allowtransparency' src={this.props.data.url} allowFullScreen></iframe>
        {/* eslint-enable */}
      </div>
    )
  }
  render () {
    this.createEmbed()
    return (
      <div className='embeds-brightcove'>
        {this.createEmbed()}
      </div>
    )
  }
}

Brightcove.propTypes = {
  data: PropTypes.object
}

export default Brightcove
