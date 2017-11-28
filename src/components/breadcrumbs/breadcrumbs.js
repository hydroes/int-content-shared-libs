import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class BreadCrumbs extends PureComponent {
  breadCrumbsItem () {
    let classNames = ''
    let data = this.props.data
    let breadCrumbItem = data.map((param, i) => {
      if (param.cssClass !== undefined && param.cssClass !== '') {
        classNames = param.cssClass
      } else {
        classNames = ''
      }
      return (
        <li key={i}>
          <a href={param.url} className={'breadcrumbs__link ' + classNames}>{param.path}</a>
        </li>
      )
    })
    return breadCrumbItem
  }

  render () {
    return (<ol className='breadcrumb breadcrumbs'>{this.breadCrumbsItem()}</ol>)
  }
}

BreadCrumbs.propTypes = {
  data: PropTypes.array
}

export default BreadCrumbs
