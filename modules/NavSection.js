// modules/NavLink.js
import React, {Component} from 'react'
import { Link } from 'react-router'

class NavSection extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  };

  render() {
      return (
        <div>
        <h3>{this.props.section.title}</h3>
         <ul className="nav-stacked category-tree" >
            {
                this.props.section.links.map(function(link, index) {
            return <li key={index}><Link to={link.link}>{link.text}</Link></li>
                })

            }

         </ul>
        </div>
     )
  }
}
export default NavSection;
