import React, { PureComponent } from 'React'
import PropTypes from 'prop-types'

class CardDateTime extends PureComponent {
  render () {
    return (<span className='hidden-xs modified-container'>
      <a className='brand-color' href={this.props.category.url}>{this.props.category.name}</a>
      {this.props.date}
    </span>)
  }
}

CardDateTime.propTypes = {
  category: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string
  }),
  date: PropTypes.string
}

export default CardDateTime
