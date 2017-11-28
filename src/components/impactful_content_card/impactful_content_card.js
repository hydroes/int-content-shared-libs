import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import LargeCardImage from '../partials/large_card_image'

class ImpactfulContentCard extends PureComponent {
  render () {
    return (<article className='content-card content-card--impactful'>
      <div className='row'>
        <a className='content-card__info content-card__info--impactful col-xs-12' href={this.props.data.url}>
          <LargeCardImage images={this.props.data.images} title={this.props.data.title} noImage={this.props.data.noImage} icon={this.props.data.icon} />
          <div className='title-container'>
            <div className='title-container__item col-xs-12 col-sm-5 col-md-6'>
              <span className='title impactful-text impactful-text--card'>
                {this.props.data.title}
              </span>
            </div>
          </div>
        </a>
      </div>
    </article>)
  }
}

ImpactfulContentCard.propTypes = {
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
    category: PropTypes.shape({
      url: PropTypes.string,
      name: PropTypes.string
    }),
    date: PropTypes.string,
    icon: PropTypes.shape({
      defaultImage: PropTypes.shape({
        path: PropTypes.string
      }),
      images: PropTypes.arrayOf(PropTypes.shape({
        maxWidth: PropTypes.number,
        path: PropTypes.string
      }))
    })
  })
}

export default ImpactfulContentCard
