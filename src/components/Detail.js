import React, { Component } from 'react';
import '@/css/detail.scss'
class Model extends Component {
	state = {
		goodData:[]
	}
	getData() {
		
	}
	render() {
		return (
			<div className="box">
			  <div className="detailheader">
			     <a></a>
			     <div></div>
			     <span className="topbar"></span>
			     <span className="headerquick"></span>
			  </div>
			 <div className="content">
			 详情
			 </div>
			 <button onClick={this.getData.bind(this)}>按住    </button>
			</div>
		)
	}
	componentDidMount() {
		
		
	}
}
export default Model;
