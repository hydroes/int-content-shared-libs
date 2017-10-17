import React from 'React'
import PropTypes from 'prop-types'

class Test extends React.Component {
  constructor (props) {
    super(props)
    this.state = {isToggleOn: true}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render () {
    return (<div className='bauer-web-component-test'>
      <h2>Test component: {this.props.title}<br />
        <button id='bauer-web-component-test-btn' type='button' className='btn btn-default btn-lg' onClick={this.handleClick}><span aria-hidden='true' className='glyphicon glyphicon-wrench' />
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </h2><span>Example helper (formatting relative time): 6 mins ago</span>
    </div>)
  }
}

Test.propTypes = {
  title: PropTypes.string
}

export default Test
