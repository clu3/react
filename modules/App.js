import React, {Component} from 'react'
import NavLink from './NavLink'
import Nav from './Nav'
import configs from './NavConfig'

class App extends Component
{
  render() {
    return (
    <div className='body'>
      <div className='nav'>
        <Nav configs={configs}/>
      </div>
      <div className='main'>
      {this.props.children}
      </div>
    </div>
    )
  }
}

export default App

