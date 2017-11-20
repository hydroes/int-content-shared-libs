import React, { PureComponent } from 'react'
import SmallContentCard from './../small_content_card/small_content_card'
import PropTypes from 'prop-types'

class NextGalleryContentCard extends PureComponent {
  render () {
    return (<article className='next-gallery-card'>
      <SmallContentCard tag='div' linkBreakpoint='col-xs-4'
        infoBreakpoint='col-xs-7'
        data={this.props.data}>
        <a className='col-xs-1 pad-0 card-arrow'>
          {
            this.props.data.navIconImg
              ? <img className='card-arrow__item' src={this.props.data.navIconImg} />
              : <svg className='card-arrow__item'
                viewBox='0 0 1792 1792'
                xmlns='http://www.w3.org/2000/svg'>
                <path d={`M1171 960q0 13-10 23l-466 466q-10 10-23 
                10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 
                23-10t23 10l466 466q10 10 10 23z`}/></svg>
          }
        </a>
      </SmallContentCard>
    </article>)
  }
}

NextGalleryContentCard.propTypes = {
  data: PropTypes.shape({
    navIconImg: PropTypes.string,
    isInline: PropTypes.bool
  })
}

export default NextGalleryContentCard
