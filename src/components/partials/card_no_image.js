import React, { PureComponent } from 'React'
import PropTypes from 'prop-types'
import CardIcons from './card_icons/card_icons'

class CardNoImage extends PureComponent {
  render () {
    const styleAttribute = `background-image: url(${this.props.image.sm.url})'`
    console.log('---- ere now')
    return (
      <div className='card-image pad-0'>
        <CardIcons icon={this.props.icon} />
        <picture className='missing-image brand-background-color' style={styleAttribute}>
          <source srcSet={this.props.image.sm.url} media='(max-width: 439px)' />
          <img src={this.props.image.lg.url} alt={this.props.title} />
        </picture>
      </div>

    )
  }
}

CardNoImage.propTypes = {
  image: PropTypes.shape({
    sm: PropTypes.shape({
      url: PropTypes.string
    }),
    lg: PropTypes.shape({
      url: PropTypes.string
    })
  }),
  icon: PropTypes.shape({
    defaultImage: PropTypes.shape({
      path: PropTypes.string
    }),
    images: PropTypes.arrayOf(PropTypes.shape({
      maxWidth: PropTypes.number,
      path: PropTypes.string
    }))
  }),
  title: PropTypes.string
}

export default CardNoImage
