import React from 'react';
import logo from '../logo.svg';
import SideBar from './SideBar';
import BlogPost from './BlogPost';
import axios from 'axios';

class Post extends React.Component {

	constructor(props) {
		super(props);

	    this.state = {
	      post: [],
	      //prev: [],
	      //next: []
	    }
	}

	componentDidMount() {
		const url = "http://localhost/react_blog/api/show_post.php?id="+this.props.match.params.id;
		
		axios({
			method: 'GET',
			url: url,
			headers: {
				'content-type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
		})
		.then(res => {  
			console.log(res.data.posts)
			this.setState({
                post: res.data.posts,
                //next: res.data.next[0].id,
                //prev: res.data.prev[0].id
             })
			console.log(this.state.post)

		})
		.catch(error => console.log(error));
	}

  render() {
    return (
      <div className="blog-box">
        <SideBar/>
        <BlogPost data={this.state.post} prev={this.state.prev} next={this.state.next} />
      </div>
    );
  }
}


export default Post;
