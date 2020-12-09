import React from 'react';

class Pager extends React.Component {

  render() {
    return (
        <nav className="blog-nav nav nav-justified my-5">
          <a className="nav-link-prev nav-item nav-link rounded-left" href="#">Previous<i className="arrow-prev fas fa-long-arrow-alt-left" /></a>
          <a className="nav-link-next nav-item nav-link rounded-right" href="#">Next<i className="arrow-next fas fa-long-arrow-alt-right" /></a>
        </nav>
    );
  }
}


export default Pager;