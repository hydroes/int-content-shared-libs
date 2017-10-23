import React, { PureComponent } from 'React'
import PropTypes from 'prop-types'
import RawImage from '../../mixins/rawImage'
import _ from 'lodash'

class CardIcons extends PureComponent {
  render () {
    let defaultIcon = _.result(this.props, 'icon.defaultImage.path', '')
    defaultIcon = _.result(this.props, 'icon.image.url', defaultIcon) // -  kept icon.image.url as precedence for backward compatibility with changes
    let hasIconImage = _.result(this.props, 'images.xs.url', '') || _.result(this.props, 'images.sm.url', '')
    console.log('--------- before the if')
    if (defaultIcon && hasIconImage) {
      let imageSizes = this.props.icon.images || []
      return (
        <div className='card-icon'>
          <RawImage defaultImgUrl={defaultIcon} imageSizes={imageSizes} />
        </div>
      )
    }
    console.log('returning nothing')
    return null
  }
}

CardIcons.propTypes = {
  icon: PropTypes.shape({
    defaultImage: PropTypes.shape({
      path: PropTypes.string
    }),
    images: PropTypes.arrayOf(PropTypes.shape({
      maxWidth: PropTypes.number,
      path: PropTypes.string
    }))
  }),
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
  })
}

export default CardIcons
