
import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import BlogFooter from './BlogFooter';
import Header from './BlogReadMoreHeader';
import Pager from './BlogReadMorePager';

class BlogPost extends React.Component {

  render() {
    return (
		<div className="main-wrapper">
        <article className="blog-post px-3 py-5 p-md-5">
          <div className="container">
            {this.props.data.map(p => {
              return (
                <React.Fragment>
                  <Header data={p}/>

                  <div key={p.id} className="blog-post-body">
                    {p.body}
                  </div>
                </React.Fragment>
              );
            })}
            {/*//<Pager next={this.props.next} prev={this.props.prev}/>*/}
            <div className="blog-comments-section">
              <div id="disqus_thread" />
              <noscript>
                Please enable JavaScript to view the 
                &lt;a href="https://disqus.com/?ref_noscript" rel="nofollow"&gt;
                comments powered by Disqus.
                &lt;/a&gt;
              </noscript>
            </div>{/*//blog-comments-section*/}
          </div>{/*//container*/}
        </article>
        <BlogFooter />
      </div>
    );
  }
}


export default BlogPost;