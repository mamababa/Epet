import React, { Component } from 'react';
import '@/css/kind.scss'
import homeData from '@/api/homeData'
import store from '@/redux/store/index.js'
class Model extends Component {
	state = {
		kindsidebar:[],
		one:[],
		two:[]
	}
	changeKind(Index) {
		console.log(Index)
		this.setState({
			    one:store.getState().kindsidebar[0][Index].cate_list
		})
//		var leftbox = document.getElementsByClassName(".leftbox")[0];
//	       var allli = leftbox.getElementsByTagName("li");
//	       for(var i = 0;i<allli.length;i++) {
//	       	  allli[i].onclick = function () {
//	       	  	for(var i =0;i<allli.length;i++) {
//	       	  		allli[i].className = ''
//	       	  	}
//	       	  	this.className = 'on';
//	       	  }
//	       }
//		$(".leftbox li").each(function (val) {
//			$(val).click(function () {
//				$(this).addClass('on').siblings().removeClass("on");
//			})
//		})
	}
	render() {
		return (
			<div className="box">
			 <div className="header">
			   <div className="headerfl">
			       <a>
			        <span className="select">分类</span>
			       </a>
			  </div>
			   <div className="headerfr">
			       <a>
			        <span>品牌</span>
			       </a>
			   <img src="https://static.epetbar.com/static_web/wap/src/images/background/search-ico.png"/>
			   </div>
			 </div>
			 <div className="content">
			    <div className="leftbox">
			    <div>
			      <ul>    
			      {
		              this.state.kindsidebar.map((item, index) => {
		                return (
		                   <li key={item.cateid} data-id={item.cateid} onClick={this.changeKind.bind(this,index)} ref="Myli">
                             {item.name}
                         </li>
		                )
		              })
                    }
              
			      </ul>
			    </div>
			    </div>
			    <div className="rightbox">
			      {
		              this.state.one.map((item, index) => {
		              	
		                return (
		                    <div className="hotkind">
			                  <a href="javascript:void();" className="hottitle">{item.title}</a>
					          <ul>	
					         
					          {
					              item.list.map((item1, index1) => {
					              	if(item1.logo){
					              		var logo=item1.logo;
					              	}else {
					              		var logo=item1.photo;
					              	}
					                return (
					                   <li key={index1}>
					                     <a>
					  
					                     <img src={logo}/>
					                     <p>{item1.name}</p>
					                    </a>
					                   </li>
					                )
					              })
                             }
					        
					        </ul>
			              </div>
		                )
		              })
                    }
			     
			    </div>
			    
			 </div>
			</div>
		)
	}
	componentDidMount() {
		homeData.kindsidebarlist((data)=> {
			console.log(data)
			store.dispatch({
            type: "GET_KINDSIDEBAR",
            data: data       
          })
			this.setState({
				kindsidebar:store.getState().kindsidebar[0],		
				one:store.getState().kindsidebar[0][0].cate_list
			})
			console.log(this.state.one)
		})
	}
}
export default Model;