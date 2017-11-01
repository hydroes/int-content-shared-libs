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
    const componentId = this.props.componentId
    return (<div id={componentId} className='bauer-web-component-test'>
      <span>Test component: {this.props.title}</span><br />
      <button id='bauer-web-component-test-btn' type='button' className='btn btn-default btn-lg' onClick={this.handleClick}><span aria-hidden='true' className='glyphicon glyphicon-wrench' />
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
      <span>Example helper (formatting relative time): 6 mins ago</span>
    </div>)
  }
}

Test.propTypes = {
  componentId: PropTypes.string,
  title: PropTypes.string
}

export default Test
