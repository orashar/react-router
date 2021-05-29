import React from 'react'
import { Link } from 'react-router-dom'

/**
* @author
* @function Nav
**/

const Nav = (props) => {

    const navStyle = {
        color : "whiteSmoke"
    }
  return(
      <div  className="nav">
    <Link to="/" style={navStyle}><h1>Nav</h1></Link>
    
    <Link to="/about" style={navStyle}>
        <li className="nav-item">About</li>
    </Link>
    <Link to="/contact" style={navStyle}>
        <li className="nav-item">Contact</li>
    </Link>
    </div>
   )

 }

export default Nav