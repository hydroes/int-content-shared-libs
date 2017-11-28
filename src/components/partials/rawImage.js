import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class RawImage extends PureComponent {
  buildSourceElements (items) {
    const sourceElements = items.map((item, index) => {
      if (item.path) {
        let mediaQuery = '(max-width: ' + item.maxWidth + 'px)'
        return <source media={mediaQuery} srcSet={item.path} key={index} />
      }
    })

    return sourceElements
  }

  buildCaption () {
    if (this.props.caption) {
      return (<span className='image__text__caption'>{this.props.caption} </span>)
    }
  }

  buildCredit () {
    if (this.props.credits) {
      return (<span className='image__text__credit'>&copy; {this.props.credits}</span>)
    }
  }

  buildSpans () {
    if (this.props.credits || this.props.caption) {
      return (<span className='image__text'>
        {this.buildCaption()}
        {this.buildCredit()}
      </span>)
    }
  }

  render () {
    const sources = this.buildSourceElements(this.props.imageSizes)
    return (<picture className='image'>
      {sources}
      <img src={this.props.defaultImgUrl} alt={this.props.altText} title={this.props.altText} />
      {this.buildSpans()}
    </picture>)
  }
}

RawImage.propTypes = {
  defaultImgUrl: PropTypes.string,
  caption: PropTypes.string,
  credits: PropTypes.string,
  altText: PropTypes.string,
  imageSizes: PropTypes.array
}

export default RawImage
