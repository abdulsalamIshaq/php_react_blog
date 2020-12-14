
import React from 'react';
import logo from '../logo.svg';
import '../App.css';

class Header extends React.Component {

  render() {
    return (
        <section className="cta-section theme-bg-light py-3">
          <div className="container text-center">
            <h2 className="heading blog-header">
              A simple blog to pen my findings and idk.
            </h2>
            {/*<div className="intro">
              <h2 className="h3 text-muted">Welcome to my blog.</h2>
            </div>*/}
            {/*<form className="signup-form form-inline justify-content-center pt-3">
              <div className="form-group">
                <label className="sr-only" htmlFor="semail">Your email</label>
                <input type="email" id="semail" name="semail1" className="form-control mr-md-1 semail" placeholder="Enter email" />
              </div>
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>*/}
          </div>{/*//container*/}
        </section>
    );
  }
}


export default Header;