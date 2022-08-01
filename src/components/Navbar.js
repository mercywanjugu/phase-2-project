import React from 'react'
// import { Link } from 'react-router-dom'


function Navbar(){
  return <nav className="navbar navbar-default">
<div className="container-fluid">
  <div className="navbar-header">
    <a className="navbar-brand" href="/">ECDE COLOR APP</a>
  </div>
  <ul className="nav navbar-nav">
    { <li className="active"><a href="/">Home</a></li> }
    <Link to="/">Home</Link> 
    <Link to="/contact">Contact</Link>
    <Link to="/about">About</Link> 



     {/* <li><a href="/Contact">Contact</a></li>
    <li><a href="/About">About</a></li>  */}
  </ul>
</div>
</nav>
}
export default Navbar;

