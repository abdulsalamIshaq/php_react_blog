import React from 'react';
import logo from '../logo.svg';
import SideBar from './SideBar';
import BlogPost from './BlogPost';
import axios from 'axios';

class Post extends React.Component {

	constructor(props) {
		super(props);

	    this.state = {
	      post: []
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
			console.log(res.data)
			this.setState({
                post: res.data,
             })
			//console.log(this.state.post)

		})
		.catch(error => console.log(error));
	}

  render() {
    return (
      <div className="blog-box">
      	<h1 className="text-center">{this.props.match.params.id}</h1>
        <SideBar/>
        <BlogPost data={this.state.post}/>
      </div>
    );
  }
}


export default Post;
