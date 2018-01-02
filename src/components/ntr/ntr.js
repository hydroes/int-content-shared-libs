import React from 'react'
import PropTypes from 'prop-types'

class Ntr extends React.PureComponent {
  render () {
    return (
      <div className='embeds-ntr'>
        <iframe src={this.props.data.url} frameBorder='0' allowFullScreen='allowfullscreen' scrolling='no' />
      </div>
    )
  }
}
Ntr.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string
  })

}
export default Ntr
