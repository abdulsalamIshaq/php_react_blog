
import React from 'react';
//import logo from '../logo.svg';
//import '../App.css';
import SideBarRight from './SideBarRight';
import Pager from './Pager';
import { Link } from 'react-router-dom';
import axios from 'axios';

class BlogHomeContent extends React.Component {

	constructor(props) {
		super(props);

	    this.state = {
	      post: []
	    }
	}

	componentDidMount() {
		const url = 'http://localhost/react_blog/api/posts.php';

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
                post: res.data,
             })
			//console.log(this.state.post)

		})
		.catch(error => console.log(error));
	}

	render() {
	    return (	    	
			<section className="blog-list px-3 py-5 p-md-5">
	        	<div className="container-fluid">
	        		<div className="row">
	        			<div className="col-sm-8">

				    		{this.state.post.map(p => {
					    		return (
					    			<div key={p.id} className="item mb-5">
					    				<div className="media">
							            	<img className="mr-3 img-fluid post-thumb d-none d-md-flex" src={p.image} alt="image" />
							            	<div className="media-body">

							              		<h3 className="title mb-1">
							              			<Link to={"post/"+p.id}>{p.title}</Link>
							              		</h3>

							              		<div className="meta mb-1">
							              			<span className="date">{new Date(p.created_at).toLocaleDateString('En', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
							              			<span className="time">
			              								<Link to={"/category/"+p.category_id}>{p.name}</Link>
							              			</span>
							              			<span className="comment">
							              				By <a href="#">{p.username}</a>
							              			</span>
							              		</div>

							              		<div className="intro">
							              			{p.body.substring(0, 150)}...
							              		</div>

							              		<Link to={"post/"+p.id}>Read more →</Link>
							            	</div>{/*//media-body*/}
							          	</div>
						        	</div>
					          	);
				    		})}

        					<Pager />

				    	</div>

			          	<SideBarRight />

			        </div>
		    	</div>
			</section>
    	);
    }
}


export default BlogHomeContent;