import React from 'react'
import PropTypes from 'prop-types'

class Pinterest extends React.PureComponent {
  render () {
    return (
      <div>
        <a data-pin-do='embedPin' data-pin-width={ this.props.data.pin.size } href={ this.props.data.pin.url }></a>
        <script async defer src='//assets.pinterest.com/js/pinit.js'></script>
      </div>
    )
  }
}

Pinterest.propTypes = {
  data: PropTypes.shape({
    pin: PropTypes.shape({
      url: PropTypes.string,
      size: PropTypes.string
    })
  })
}

export default Pinterest
