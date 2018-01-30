import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// Audio On Demand
class AOD extends PureComponent {
  render () {
    let { data: { url } } = this.props
    return (<div className='embeds-aod'>
      <iframe src={url} frameBorder="0" scrolling="no" width="100%"></iframe>
    </div>)
  }
}

AOD.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string
  })
}

export default AOD
