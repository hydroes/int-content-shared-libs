import React, { PureComponent } from 'React'
import PropTypes from 'prop-types'
import Meta from '../meta/meta'

class TwitterCardTags extends PureComponent {
  generateMediaMeta () {
    if (this.props.data.image) {
      this.metaItems.push(<Meta name='twitter:image' content={this.props.data.image.url} />)
      this.metaItems.push(<Meta name='twitter:image:alt' content={this.props.data.image.alt} />)
    }
  }

  render () {
    this.metaItems = []

    this.metaItems.push(<Meta name='twitter:title' content={this.props.data.title} />)
    this.metaItems.push(<Meta name='twitter:description' content={this.props.data.description} />)
    this.metaItems.push(<Meta name='twitter:card' content={this.props.data.twitter.cardType} />)
    this.metaItems.push(<Meta name='twitter:site' content={this.props.data.twitter.site} />)
    this.metaItems.push(<Meta name='twitter:creator' content={this.props.data.twitter.creator} />)
    this.generateMediaMeta()

    return (
      this.metaItems
    )
  }
}

TwitterCardTags.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string
    }),
    twitter: PropTypes.shape({
      cardType: PropTypes.string,
      site: PropTypes.string,
      creator: PropTypes.string,
      domain: PropTypes.string
    })
  })
}

export default TwitterCardTags
