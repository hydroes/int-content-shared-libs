import React, { PureComponent } from 'React'
import PropTypes from 'prop-types'

class Brightcove extends PureComponent {
  createEmbed () {
    this.props.data.url = this.props.data.url.replace('http://', '//')
    this.props.data.url = this.props.data.url.replace('https://', '//')
    return (
      <iframe frameBorder='0' allowTransparency='allowtransparency' src={this.props.data.url} allowFullScreen>
      </iframe>
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
