import React, { PureComponent } from 'React'
import PropTypes from 'prop-types'

class Meta extends PureComponent {
  render () {
    return (
      <meta name={this.props.name} content={this.props.content} />
    )
  }
}

Meta.propTypes = {
  name: PropTypes.string,
  content: PropTypes.string
}

export default Meta
