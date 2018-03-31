import React, { Component } from 'react';
class Model extends Component {
	state = {
		goodData:[]
	}
	getData() {
		console.log(this)
		console.log(this.props.match.params.goodsId)
	}
	render() {
		return (
			<div className="box">
			 <header>详情</header>
			 <div className="content">
			 详情
			 </div>
			 <button onClick={this.getData.bind(this)}>按住    </button>
			</div>
		)
	}
	componentDidMount() {
		const googdsId =this.props.match.params.bannerID;
		
	}
}
export default Model;
