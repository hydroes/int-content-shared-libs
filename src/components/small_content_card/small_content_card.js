import React, { PureComponent } from 'React'
import PropTypes from 'prop-types'
import SmallCardImage from '../partials/small_card_image'
import Title from '../partials/title'
import CardDateTime from '../partials/card_date_time'

class SmallContentCard extends PureComponent {
  render () {
    const fullWidthCol = this.props.data.isInline ? '' : 'col-sm-12'
    return (<article className='content-card content-card--small'>
      <div className='row'>
        <a className={`content-card__link col-xs-4 ${fullWidthCol}`} href={this.props.data.url}>
          <SmallCardImage images={this.props.data.images} title={this.props.data.title} noImage={this.props.data.noImage} icon={this.props.data.icon} />
        </a>
        <div className={`content-card--small__info${this.props.data.isInline ? '--inline-card' : ''} content-card__info col-xs-8 ${fullWidthCol}`}>
          <Title url={this.props.data.url} title={this.props.data.title} />
          {
            this.props.data.category && this.props.data.date &&
            <CardDateTime category={this.props.data.category} date={this.props.data.date} />
          }
        </div>
      </div>
    </article>)
  }
}

SmallContentCard.propTypes = {
  data: PropTypes.shape({
    isInline: PropTypes.bool,
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

export default SmallContentCard
