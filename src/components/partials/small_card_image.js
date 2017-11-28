import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import CardIcons from './card_icons/card_icons'
import CardNoImage from './card_no_image'

class SmallCardImage extends PureComponent {
  render () {
    if (this.props.images) {
      return (
        <div className='card-image pad-0'>
          <div className='col-xs-4 col-sm-3 col-md-2 icon-container'>
            <CardIcons icon={this.props.icon} images={this.props.images}/>
          </div>
          <picture>
            <source type={this.props.images.xs.mimeType} srcSet={this.props.images.xs.url} media='(max-width: 480px)' />
            <img src={this.props.images.sm.url} alt={this.props.images.altText} />
          </picture>
        </div>
      )
    } else {
      return (<CardNoImage image={this.props.noImage} title={this.props.title} icon={this.props.icon} />)
    }
  }
}

SmallCardImage.propTypes = {
  images: PropTypes.shape({
    xs: PropTypes.shape({
      url: PropTypes.string,
      mimeType: PropTypes.string
    }),
    sm: PropTypes.shape({
      url: PropTypes.string,
      mimeType: PropTypes.string
    }),
    altText: PropTypes.string
  }),
  title: PropTypes.string,
  noImage: PropTypes.shape({
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
  })
}

export default SmallCardImage
