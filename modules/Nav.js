// modules/NavLink.js
//import React from 'react'
import React , { Component } from 'react'
import { Link } from 'react-router'
import NavSection from './NavSection'


class Nav extends Component// React.createClass({
{
  constructor (props) {
    super(props);
    console.log(this.props);
//    this.props =  { items : NavConfig};
  }

  render(){
    return ( 
        <div>
         {this.props.configs.map(function(navSection, index) {
            return (
            <div key={index}><NavSection section={navSection} /></div>
            )
         } 
         )}
         </div>
    )
  }

}

export default Nav;
