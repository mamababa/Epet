import React, { Component } from 'react';
import homeData from '@/api/homeData'
import store from '@/redux/store/index.js'

class Homeend extends Component {
	state = {
		salelist:[]
	}
	getdata () {
		console.log(this.state.salelist)
		console.log(typeof(this.state.salelist))
	}
	render() {
		return (
			<div className="theend">
			   <div className="line"></div>
			   <img src="https://img2.epetbar.com/nowater/2017-12/13/11/be84f01e893b0e631d8512566eb79117.jpg@!water"/>
			   <div className="theend_footer">
			     <div className="connect">
			       <span className="bt">触屏版</span>
			       <span>手机客户端</span>
			       <span>关于我们</span>
			       <span>联系我们</span>
			     </div>
			     <div className="commpany">
			         © wap.epet.com 版权：重庆易宠科技有限公司
			     </div>
			   </div>
			</div>		
		)
	}
	componentDidMount() {
		homeData.homesalelist((data)=> {
			store.dispatch({
            type: "GET_HOMESALE",
            data: data       
          })
			this.setState({
				salelist:store.getState().homesale[0]
			})
		})
	}
}
export default Homeend;