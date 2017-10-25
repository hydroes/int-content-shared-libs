import React, { PureComponent } from 'React'
import PropTypes from 'prop-types'

class Meta extends PureComponent {
  render () {
    if (this.props.property) {
      return (
        <meta property={this.props.property} content={this.props.content} />
      )
    }

    if (this.props.name) {
      return (
        <meta name={this.props.name} content={this.props.content} />
      )
    }

    return null
  }
}

Meta.propTypes = {
  name: PropTypes.string,
  content: PropTypes.string,
  property: PropTypes.string
}

export default Meta
