import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import giphy from './../../component_helpers/giphy'

class Giphy extends PureComponent {
  createEmbed () {
    this.props.data.url = giphy(this.props.data.url)
    return (
      <iframe src={this.props.data.url} width='480' height='480' frameBorder='0' allowFullScreen=''></iframe>
    )
  }

  render () {
    return (
      <div className='embeds-giphy'>
        {this.createEmbed()}
      </div>
    )
  }
}

Giphy.propTypes = {
  data: PropTypes.object
}

export default Giphy
