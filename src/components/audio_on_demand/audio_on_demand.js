import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class AudioOnDemand extends PureComponent {


  render() {
    let { data: { url } } = this.props
    return <iframe src={url} frameborder="0" scrolling="no" width="100%" style="height: 100px;"></iframe>
  }
}

AudioOnDemand.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string
  })
}
