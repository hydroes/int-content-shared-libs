import React, { PureComponent } from 'React'
import PropTypes from 'prop-types'
import RawImage from '../partials/rawImage'

class Image extends PureComponent {
  render () {
    let altText = ''
    if (!altText) {
      altText = this.props.data.title
    } else {
      altText = this.props.data.altText
    }

    return (
      <RawImage defaultImgUrl={this.props.data.defaultImage.path} imageSizes={this.props.data.images} altText={altText} caption={this.props.data.caption} credits={this.props.data.credits} />
    )
  }
}

Image.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    altText: PropTypes.string,
    defaultImage: PropTypes.shape({
      path: PropTypes.string
    }),
    images: PropTypes.shape({
      maxWidth: PropTypes.number,
      path: PropTypes.string
    }),
    caption: PropTypes.string,
    credits: PropTypes.string
  })
}

export default Image
