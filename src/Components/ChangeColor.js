import React from 'react';

clas s ChangeColor extends React.Component {

  render() {
    return (
    	<div id="config-panel" className="config-panel d-none d-lg-block">
  			<div className="panel-inner">
			    <a id="config-trigger" className="config-trigger config-panel-hide text-center" href="#">
			      <i className="fas fa-cog fa-spin mx-auto" data-fa-transform="down-6" />
			    </a>

    			<h5 className="panel-title">Choose Colour</h5>

			    <ul id="color-options" className="list-inline mb-0">

			      <li className="theme-1 active list-inline-item">
			        <a data-style="assets/css/theme-1.css" href="#" />
			      </li>

			      <li className="theme-2  list-inline-item">
			        <a data-style="assets/css/theme-2.css" href="#" />
			      </li>

			      <li className="theme-3  list-inline-item">
			        <a data-style="assets/css/theme-3.css" href="#" />
			      </li>

			      <li className="theme-4  list-inline-item">
			        <a data-style="assets/css/theme-4.css" href="#" />
			      </li>

			      <li className="theme-5  list-inline-item">
			        <a data-style="assets/css/theme-5.css" href="#" />
			      </li>

			      <li className="theme-6  list-inline-item">
			        <a data-style="assets/css/theme-6.css" href="#" />
			      </li>

			      <li className="theme-7  list-inline-item">
			        <a data-style="assets/css/theme-7.css" href="#" />
			      </li>

			      <li className="theme-8  list-inline-item">
			        <a data-style="assets/css/theme-8.css" href="#" />
			      </li>
			      
			    </ul>
    			
    			<a id="config-close" className="close" href="#"><i className="fa fa-times-circle" /></a>
  			</div>		
		</div>
    );
  }
}


export default ChangeColor;
