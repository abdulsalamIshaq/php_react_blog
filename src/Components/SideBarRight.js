
import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import BlogFooter from './BlogFooter';
import Header from './Header';

import { Link } from 'react-router-dom';
import axios from 'axios';

class SideBarRight extends React.Component {

  constructor(props) {
    super(props);

      this.state = {
        cat: []
      }
  }

  componentDidMount() {
    const url = 'http://localhost/react_blog/api/categories.php'

    axios({
      method: 'GET',
      url: url,
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    })
    .then(res => {  
      //console.log(res.data.categories)
      this.setState({
        cat: res.data.categories,
      })
      console.log(this.state.cat)

    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="col-sm-4">
        <div className="card shadow p-2">
          <p className="h6 pb-0 mb-0">Categories</p>
          <hr />
          <div className="d-flex">
            {this.state.cat.map(c => {
              return (
                <Link to={"/category/"+c.id} className="btn btn-sm" key={c.id}>{c.name}</Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}


export default SideBarRight;