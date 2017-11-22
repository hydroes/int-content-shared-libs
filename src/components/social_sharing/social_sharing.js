import React from 'react'
import PropTypes from 'prop-types'

class SocialSharing extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      shareUrl: this.props.data.protocol + this.props.data.host + this.props.data.pathname
    }
    this.element = {
      facebook: <li></li>,
      twitter: <li></li>
    }
    this.defaultMsg = this.props.data.shareMsg.default
    this.shareMsg = this.props.data.shareMsg
  }

  componentDidMount () {
    this.element.facebook.onclick = (evt) => {
      evt.preventDefault()
      window.open(
        'https://www.facebook.com/sharer.php?u=' + this.state.shareUrl,
        '_blank',
        'width=600, height=300')
    }

    this.element.twitter.onclick = (evt) => {
      evt.preventDefault()
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent((this.shareMsg.twitter || this.defaultMsg) + ' ')}&amp;url=${this.state.shareUrl}&amp;original_referer=`,
        '_blank',
        'width=600,height=300')
    }
  }

  render () {
    const { componentId } = this.props
    return (
      <ul id={componentId} className='social-sharing'>
        <li className='article-social-share-facebook' ref={ (el) => { this.element.facebook = el } }>
          <a href='#' data-social-share-url={this.state.shareUrl}>
            <img src='https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-facebook.svg' alt='Share on Facebook' title='Share on Facebook' />
          </a>
        </li>
        <li className='article-social-share-twitter' ref={ (el) => { this.element.twitter = el } }>
          <a href='#' data-social-share-url={this.state.shareUrl}>
            <img src='https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-twitter.svg' alt='Tweet on Twitter' title='Tweet on Twitter' />
          </a>
        </li>
        <li className='article-social-share-whatsapp'>
          <a href={`whatsapp://send?text=${encodeURIComponent((this.shareMsg.whatsApp || this.defaultMsg) + ' ' + this.state.shareUrl)}`}>
            <img src='https://image.flaticon.com/icons/svg/124/124034.svg' data-action='share/whatsapp/share' alt='Text on Whatsapp' title='Text on Whatsapp' />
          </a>
        </li>
      </ul>
    )
  }
}

SocialSharing.propTypes = {
  componentId: PropTypes.string,
  data: PropTypes.shape({
    host: PropTypes.string,
    pathname: PropTypes.string,
    protocol: PropTypes.string,
    shareMsg: PropTypes.shape({
      default: PropTypes.string,
      twitter: PropTypes.string,
      whatsApp: PropTypes.string
    })
  })
}

export default SocialSharing
