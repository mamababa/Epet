import React, { Component } from 'react';
class Model extends Component {
	state = {
		
	}
	render() {
		return (
			<div className="box">
			 <header>分类</header>
			 <div className="content">
			 分类
			 </div>
			</div>
		)
	}
	componentDidMount() {
		console.log(this);
		console.log(this.props.location.state.flag)
	}
}
export default Model;