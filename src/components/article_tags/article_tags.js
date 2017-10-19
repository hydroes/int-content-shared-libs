import React, { Component } from 'React'
import PropTypes from 'prop-types'

class Articletags extends Component {
  tagItem () {
    const tagItems = this.props.data.tags
    let list = tagItems.map(tag => {
      if (tag && tag.name) {
        return (
          <li className='pad-0.margin-l-r-5'>
            <a className='pad-10' href={tag.url}>{tag.name}</a>
          </li>
        )
      }
    })
    return list
  }

  render () {
    if (this.props.data.tags) {
      return (<ul className='article-tags'>{this.tagItem()}</ul>)
    }
  }
}

Articletags.propTypes = {
  data: PropTypes.object
}

export default Articletags
