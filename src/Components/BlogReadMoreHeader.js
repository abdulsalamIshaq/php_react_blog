
import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render() {
    return (
        <header className="blog-post-header">
          <h2 className="title mb-2">{this.props.data.title}</h2>
          <div className="meta mb-3">
            <span className="date">{new Date(this.props.data.created_at).toLocaleDateString('En', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span className="time">
              <Link to={"/category/"+this.props.data.category_id}>{this.props.data.name}</Link>
            </span>
            <span className="comment">
              By <a href="#">Abdulsalam</a>
            </span>
          </div>
        </header>
    );
  }
}


export default Header;