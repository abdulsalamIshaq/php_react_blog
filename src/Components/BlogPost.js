
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
            <Pager />
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
        <section className="promo-section theme-bg-light py-5 text-center">
          <div className="container">
            <h2 className="title">Promo Section Heading</h2>
            <p>You can use this section to promote your side projects etc. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
            <figure className="promo-figure">
              <a href="https://made4dev.com" target="_blank"><img className="img-fluid" src="assets/images/promo-banner.jpg" alt="image" /></a>
            </figure>
          </div>{/*//container*/}
        </section>{/*//promo-section*/}
        <BlogFooter />
      </div>
    );
  }
}


export default BlogPost;