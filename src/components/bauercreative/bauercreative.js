import React, { PureComponent } from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'

class BauerCreative extends PureComponent {
  iframe () {
    const iframeId = _.uniqueId('bauerCreativeFrame_')
    return (
      <div className='embeds-bauercreative'>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js' />
        {/* eslint-disable */}
        <iframe src={this.props.data.url} allowtransparency='true' frameBorder='0' id={iframeId} scrolling='no' width='100%'></iframe>
        {/* eslint-enable */}
        <Helmet>
          <script>
            {`var iframes = iFrameResize({}, '#${iframeId}')`}
          </script>
        </Helmet>
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
