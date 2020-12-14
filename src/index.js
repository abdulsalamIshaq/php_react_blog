import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import Post from './Components/Post';
import About from './Components/About';
import Category from './Components/Category';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  	<BrowserRouter>
  		<main>
            <Switch>
    			<Route path='/' component={App} exact />
          <Route path='/post/:id' component={Post} exact />
    			<Route path='/category/:id' component={Category} exact />
    			<Route path='/about' component={About} exact />
    			<Route component={Error} />
            </Switch>
        </main>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
