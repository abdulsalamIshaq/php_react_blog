
import React from 'react';
//import logo from '../logo.svg';
import { Link } from 'react-router-dom';
//import '../App.css';

class SideBar extends React.Component {

  render() {
    return (
		<header className="header text-center">	    
	        <h1 className="blog-name pt-lg-4 mb-0">
	        	<Link to="/">Kayode's Blog</Link>
	        </h1>

	        <nav className="navbar navbar-expand-lg navbar-dark">
	        	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
	            	<span className="navbar-toggler-icon" />
	          	</button>

	          	<div id="navigation" className="collapse navbar-collapse flex-column">
	            	<div className="profile-section pt-3 pt-lg-0">

	              		<img className="profile-image mb-3 rounded-circle mx-auto" src="/assets/images/profile.png" alt="image" />			
              			<div className="bio mb-3">
          					Hi, my name is <b className="font-weight-bold">Abdulsalam Ishaq</b>. <br />A Fullstack Web Developer.
          					<br />
          					<Link to="/about" className="font-weight-bold">Find out more about me</Link>
          				</div>{/*//bio*/}

		              	<ul className="social-list list-inline py-3 mx-auto">
			                
			                <li className="list-inline-item">
			                	<a href="https://github.com/kayode-suc"><i className="fab fa-github-alt fa-fw" /></a>
			                </li>

			                <li className="list-inline-item">
			                	<a href="#"><i className="fab fa-facebook fa-fw" /></a>
			                </li>
			                
			                <li className="list-inline-item">
			                	<a href="#"><i className="fab fa-twitter fa-fw" /></a>
			                </li>

			                <li className="list-inline-item">
			                	<a href="#"><i className="fab fa-stack-overflow fa-fw" /></a>
			                </li>
			                
			                <li className="list-inline-item">
			                	<a href="#"><i className="fab fa-codepen fa-fw" /></a>
			                </li>			                

		                </ul>{/*//social-list*/}

			             <hr /> 
			        </div>{/*//profile-section*/}

		            <ul className="navbar-nav flex-column text-left">
		              	<li className="nav-item active">
			                <Link to="/" className="nav-link">
			                	<i className="fas fa-home fa-fw mr-2" />Blog Home <span className="sr-only">(current)</span>
			                </Link>
		              	</li>
		                <li className="nav-item">
			                <Link to="/about" className="nav-link">
			                	<i className="fas fa-user fa-fw mr-2" />About Me
			                </Link>
		                </li>
		            </ul>

        			<div className="my-2 my-md-3">
          				<a className="btn btn-primary" href="#" target="_blank">Get in Touch</a>
        			</div>
	            </div>
	        </nav>
	    </header>
    );
  }
}


export default SideBar;