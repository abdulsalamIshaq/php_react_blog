
import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import BlogFooter from './BlogFooter';
import Header from './Header';
import Pager from './Pager';
import BlogHomeContent from './BlogHomeContent';

import { Link } from 'react-router-dom';

class BlogHome extends React.Component {

  render() {
    return (
	   <div className="main-wrapper">
        <Header />

        <section className="blog-list px-3 py-5 p-md-5">
          <div className="container">
            
            <BlogHomeContent />
            
            <Pager />
            
          </div>
        </section>
        
        <BlogFooter />

      </div>
    );
  }
}


export default BlogHome;