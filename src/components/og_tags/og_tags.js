import React, { PureComponent } from 'React'
import PropTypes from 'prop-types'
import Meta from '../meta/meta'

class OgTags extends PureComponent {
  generateSecureImageMeta () {
    if (this.props.data.image.secure_url) {
      this.metaItems.push(<Meta property='og:image:secure_url' content={this.props.data.image.secure_url} />)
    } else if (this.props.data.image.url.startsWith('https')) {
      this.metaItems.push(<Meta property='og:image:secure_url' content={this.props.data.image.url} />)
    }
  }

  generateSecureVideoMeta () {
    if (this.props.data.video.secure_url) {
      this.metaItems.push(<Meta property='og:video:secure_url' content={this.props.data.video.secure_url} />)
    } else if (this.props.data.video.url.startsWith('https')) {
      this.metaItems.push(<Meta property='og:video:secure_url' content={this.props.data.video.url} />)
    }
  }

  generateMediaMeta () {
    if (this.props.data.image) {
      this.metaItems.push(<Meta property='og:image' content={this.props.data.image.url} />)
      this.metaItems.push(<Meta property='og:image:width' content={this.props.data.image.width.toString()} />)
      this.metaItems.push(<Meta property='og:image:height' content={this.props.data.image.height.toString()} />)
      this.metaItems.push(<Meta property='og:image:type' content={this.props.data.image.type} />)
    } else if (this.props.data.video) {
      this.metaItems.push(<Meta property='og:video' content={this.props.data.video.url} />)
      this.metaItems.push(<Meta property='og:video:width' content={this.props.data.video.width.toString()} />)
      this.metaItems.push(<Meta property='og:video:height' content={this.props.data.video.height.toString()} />)
      this.metaItems.push(<Meta property='og:video:type' content={this.props.data.video.type} />)
      this.metaItems.push(<Meta property='og:video:image' content={this.props.data.video.imageUrl} />)
    }
  }
  generateArticleMeta () {
    if (this.props.data.article) {
      this.metaItems.push(<Meta property='article:published_time' content={this.props.data.article.published_time} />)
      this.metaItems.push(<Meta property='article:author' content={this.props.data.article.author} />)
    }
  }

  render () {
    this.metaItems = []

    this.metaItems.push(<Meta property='og:site_name' content={this.props.data.site_name} />)
    this.metaItems.push(<Meta property='og:type' content={this.props.data.type} />)
    this.metaItems.push(<Meta property='og:url' content={this.props.data.url} />)
    this.metaItems.push(<Meta property='og:description' content={this.props.data.description} />)
    this.metaItems.push(<Meta property='og:title' content={this.props.data.title} />)
    this.metaItems.push(<Meta property='og:locale' content={this.props.data.locale} />)
    this.generateMediaMeta()
    this.generateArticleMeta()

    return (
      this.metaItems
    )
  }
}

OgTags.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    site_name: PropTypes.string,
    locale: PropTypes.string,
    url: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.shape({
      url: PropTypes.string,
      secure_url: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
      type: PropTypes.string
    }),
    video: PropTypes.shape({
      url: PropTypes.string,
      secure_url: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
      type: PropTypes.string,
      imageUrl: PropTypes.string
    }),
    article: PropTypes.shape({
      published_time: PropTypes.string,
      author: PropTypes.string
    })
  })
}

export default OgTags
