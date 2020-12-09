
import React from 'react';

class Header extends React.Component {

  render() {
    return (
        <header className="blog-post-header">
          <h2 className="title mb-2">{this.props.data.title}</h2>
          <div className="meta mb-3">
            <span className="date">{new Date(this.props.data.created_at).toLocaleDateString('En', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span className="time">5 min read</span>
            <span className="comment">
              <a href="#">4 comments</a>
            </span>
          </div>
        </header>
    );
  }
}


export default Header;