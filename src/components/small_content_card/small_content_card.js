import React, { PureComponent } from 'React'
import PropTypes from 'prop-types'

class SmallContentCard extends PureComponent {
  render () {
    return (<p>Smallcontent card</p>)
  }
}

SmallContentCard.propTypes = {
  data: PropTypes.shape({
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
    noImage: PropTypes.shape({
      sm: PropTypes.shape({
        url: PropTypes.string
      }),
      lg: PropTypes.shape({
        url: PropTypes.string
      })
    }),
    url: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.shape(),
    date: PropTypes.string
  })
}

export default SmallContentCard
