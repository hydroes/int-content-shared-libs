import React from 'react'
import PropTypes from 'prop-types'
import Paginate from '../../component_helpers/paginate'

class Pagination extends React.PureComponent {
  render () {
    const pages = Paginate(this.props.data) || []
    return (
      <ul className={'pagination ' + this.props.data.size}>
        {
          pages.map(({href, isActive, display}, id) => {
            return <li key={id}>
              <a href={href} className={isActive ? 'pagination__link--active' : 'pagination__link'}>
                {display}
              </a>
            </li>
          })
        }
      </ul>
    )
  }
}

Pagination.propTypes = {
  data: PropTypes.shape({
    size: PropTypes.string
  })
}

export default Pagination
