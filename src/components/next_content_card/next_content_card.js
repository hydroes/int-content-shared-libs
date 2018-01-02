import React, { PureComponent } from 'react'
import SmallContentCard from './../small_content_card/small_content_card'
import PropTypes from 'prop-types'

class NextContentCard extends PureComponent {
  render () {
    return (
      <SmallContentCard linkBreakpoint='col-xs-4'
        infoBreakpoint='col-xs-7'
        data={this.props.data}
        styleName='content-card--next'>
        <a className='col-xs-1 pad-0 card-arrow'
          href={this.props.data.url}
          style={{background: `url(${this.props.data.navIconImgSrc}) no-repeat center`}} />
      </SmallContentCard>)
  }
}

NextContentCard.propTypes = {
  data: PropTypes.shape({
    navIconImgSrc: PropTypes.string,
    url: PropTypes.string
  })
}

export default NextContentCard
