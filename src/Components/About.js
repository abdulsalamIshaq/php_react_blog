
import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import BlogFooter from './BlogFooter';
import Header from './Header';
import SideBar from './SideBar';
import BlogHomeContent from './BlogHomeContent';
import { Link } from 'react-router-dom';

class About extends React.Component {

  render() {
    return (
        

        <div className="main-wrapper">
        <SideBar />
        <article className="about-section py-5">
          <div className="container">
            <h2 className="title mb-3">About Me</h2>
            <p>I am Abdulsalam Ishaq a Fullstack Web developer</p>
            <figure><img className="img-fluid" src="assets/images/about-me.jpg" alt="image" /></figure>

            <h5 className="mt-5">About The Blog</h5>
            <p>This Blog was designed to improve my React knowledge</p>

            <h5 className="mt-5">My Skills and Experiences</h5>
            <p>Here are skills i have experience in</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Javascript</li>
              <li>Jquery</li>
              <li>PHP</li>
              <li>Laravel</li>
              <li>Codigniter</li>
            </ul>

            <h5 className="mt-5">Side Projects</h5>
            <p>Ehmmmm...</p>
          
          </div>
        </article>{/*//about-section*/}
        <section className="cta-section theme-bg-light py-5">
          <div className="container text-center">
            <h2 className="heading">Newsletter</h2>
            <div className="intro">Welcome to my blog. Subscribe and get my latest blog post in your inbox.</div>
            <form className="signup-form form-inline justify-content-center pt-3">
              <div className="form-group">
                <label className="sr-only" htmlFor="semail">Your email</label>
                <input type="email" id="semail" name="semail1" className="form-control mr-md-1 semail" placeholder="Enter email" />
              </div>
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>{/*//container*/}
        </section>
        
        <BlogFooter />

      </div>
        
    );
  }
}


export default About;