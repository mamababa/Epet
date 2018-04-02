import React, { Component } from 'react';
import '@/css/search.scss'
import homeData from '@/api/homeData'
import store from '@/redux/store/index.js'
class Model extends Component {
	state = {
		searchhot:[]
	}
	searchTotal () {
		var val = this.refs.Input.value;
		console.log(val);
		this.props.history.push("/searchlist/"+val)
//		/searchlist/:id
//		this.props.history.push({
//        pathname:"/searchlist",
//        query:{keyword:val}
//     })
	}
	render() {
		return (
			<div className="box">
				 <div className="searchheader">
				    <span></span>
				     <div>
				        <form>
				          <input type="text" placeholder='搜索你喜欢的宝贝' ref="Input"/>
				        </form>
				        <label>
				          <img src="https://static.epetbar.com/static_wap/epetapp/pages/search/images/search-ico.png"/>
				        </label>
				     </div>
				     <a onClick={this.searchTotal.bind(this)}>搜索</a>
				 </div>
			   	
				 <div className="content">
				   <div className="hot">
				     <p>
				       <img src="https://static.epetbar.com/static_wap/epetapp/pages/search/images/rmss.png"/>
				       <span>精品推荐</span>
				     </p>
				     <div className="hotcon">			        
				       {
			              this.state.searchhot.map((item, index) => {
			                return (
	                           <a>
                                  {item.words}
	                           </a>     
			                )
			              })
                      }
                     
				     </div>
				     <p>
				       <img src="https://static.epetbar.com/static_wap/epetapp/pages/search/images/zjss.png"/>
				       <span>最近搜索</span>
				      </p>
				   </div>
				   <div className="clearhis">清空搜索历史</div>
				 </div>
			</div>
		)
	}
	componentDidMount() {
		homeData.searchhotlist((data)=> {
			store.dispatch({
            type: "GET_SEARCHHOT",
            data: data       
          })
			this.setState({
				searchhot:store.getState().searchhot[0][0].list
			})
			console.log(this.state.searchhot)
		})
		
	}
}
export default Model;