import React from 'React'
import PropTypes from 'prop-types'

class Test extends React.Component {
  contructor (props) {
  }

  render () {
    return (<div className='bauer-web-component-test'>
      <h2>Test component<br />
        <button id='bauer-web-component-test-btn' type='button' className='btn btn-default btn-lg'><span aria-hidden='true' className='glyphicon glyphicon-wrench' /></button>{this.props.title}
      </h2><span>Example helper (formatting relative time): 6 mins ago</span>
    </div>)
  }
}

Test.propTypes = {
  title: PropTypes.string
}

export default Test
