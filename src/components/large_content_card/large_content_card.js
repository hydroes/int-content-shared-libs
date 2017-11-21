import React, { PureComponent } from 'React'
import PropTypes from 'prop-types'
import LargeCardImage from '../partials/large_card_image'
import Title from '../partials/title'
import CardDateTime from '../partials/card_date_time'

class LargeContentCard extends PureComponent {
  render () {
    return (<article className='content-card content-card--large'>
      <div className='row'>
        <a className='content-card--large__link content-card__link col-xs-12' href={this.props.data.url}>
          <LargeCardImage images={this.props.data.images} title={this.props.data.title} noImage={this.props.data.noImage} icon={this.props.data.icon} />
        </a>
        <div className='content-card--large__info content-card__info col-xs-12'>
          <Title url={this.props.data.url} title={this.props.data.title} />
          <CardDateTime category={this.props.data.category} date={this.props.data.date} />
        </div>
      </div>
    </article>)
  }
}

LargeContentCard.propTypes = {
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

export default LargeContentCard
