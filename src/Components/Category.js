
import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import BlogFooter from './BlogFooter';
import Header from './Header';
import BlogCategoryContent from './BlogCategoryContent';
import SideBar from './SideBar';

import { Link } from 'react-router-dom';
import axios from 'axios';

class BlogHome extends React.Component {

  constructor(props) {
    super(props);

      this.state = {
        post: []
      }
  }

  componentDidMount() {
    const url = 'http://localhost/react_blog/api/category_post.php?id='+this.props.match.params.id;;

    axios({
      method: 'GET',
      url: url,
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    })
    .then(res => {  
      //console.log(res.data)
      this.setState({
        post: res.data.posts,
      })
      //console.log(this.state.post)

    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <React.Fragment>
        <SideBar />
  	    <div className="main-wrapper">
          <Header />              
          <BlogCategoryContent data={this.state.post}/>          
          <BlogFooter />
        </div>
      </React.Fragment>
    );
  }
}


export default BlogHome;