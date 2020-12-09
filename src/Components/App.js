import React from 'react';
import logo from '../logo.svg';
import SideBar from './SideBar';
import BlogHome from './BlogHome';

class App extends React.Component {

  render() {
    return (
      <div className="blog-box">
        <SideBar />
        <BlogHome />
      </div>
    );
  }
}


export default App;
