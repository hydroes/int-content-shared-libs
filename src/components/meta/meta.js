import React, { PureComponent } from 'React'
import PropTypes from 'prop-types'

class Meta extends PureComponent {
  render () {
    return (
      <meta property={this.props.property} content={this.props.content} />
    )
  }
}

Meta.propTypes = {
  property: PropTypes.string,
  content: PropTypes.string
}

export default Meta
