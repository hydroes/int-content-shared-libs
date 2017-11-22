import React, { PureComponent } from 'React'
import _ from 'lodash'
import PropTypes from 'prop-types'

class BauerCreative extends PureComponent {
  iframe () {
    let iframeId = _.uniqueId('bauerCreativeFrame_')
    return (
      <div className='embeds-bauercreative'>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js'></script>
        <iframe src={this.props.data.url} allowTransparency='true' frameBorder='0' id={iframeId} scrolling='no' width='100%'></iframe>
        <script>{`var iframes = iFrameResize({}, '##{iframeId}')`}</script>
      </div>
    )
  }
  render () {
    return (<div>{this.iframe()}</div>)
  }
}

BauerCreative.propTypes = {
  data: PropTypes.object
}

export default BauerCreative
