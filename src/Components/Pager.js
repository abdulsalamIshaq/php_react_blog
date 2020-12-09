
import React from 'react';
import logo from '../logo.svg';
import '../App.css';

class Pager extends React.Component {

  render() {
    return (
    	<nav className="blog-nav nav nav-justified my-5">
          <a className="nav-link-prev nav-item nav-link d-none rounded-left" href="#">Previous<i className="arrow-prev fas fa-long-arrow-alt-left" /></a>
          <a className="nav-link-next nav-item nav-link rounded" href="#">Next<i className="arrow-next fas fa-long-arrow-alt-right" /></a>
         </nav>
    );
  }
}


export default Pager;