import React, { PureComponent } from 'React'
import PropTypes from 'prop-types'

class Title extends PureComponent {
  render () {
    return (<span className='title'>
      <a href={this.props.url}>{this.props.title}</a>
    </span>)
  }
}

Title.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string
}

export default Title
