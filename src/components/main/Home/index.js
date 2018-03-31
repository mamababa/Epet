import React, { Component } from 'react';
import homeData from '@/api/homeData'
import {Link} from 'react-router-dom'
import '@/css/home.scss'
import Banner from './banner.js'
import Menu from './menu.js'
import Surprise from './surprise.js'
import Chao from './chao.js'
import Sale from './forsale.js'
import Cutefoot from './cutefoot.js'
import Cutetalk from './cutetalk.js'
import Smalldot from './smalldot.js'
import Homeend from './homeend.js'
import store from '@/redux/store/index.js'

class Model extends Component {
	state = {
		homenavlist:[],
		homebannerlist:[]
		
	}
	goPageHandler() {
//  this.props.history.push("/user")
    this.props.history.push({
    	pathname:"/login",
    	state:{
    		flag:'home'
    	}
    })
	}
	getData() {
		console.log(store.getState().homebanner);
		console.log(this.state.homebannerlist)
		console.log(typeof (store.getState().homebanner))
	}
	render() {
		return (
			<div className="box">
				 <header>
				    <a className="downapp">
				    <img src="https://img2.epetbar.com/nowater/2017-12/13/18/c63b6e6cf483cbb61196f658920a9d6e.jpg@!water" />
				    </a>
				 </header>
				    {
				 	//引擎部分
				 	}
				 <div className="indexbox">
				    <div className="searchbox">
				       <div className="location">
				        <a href="#">
				          <span>狗狗</span>
				          <span className="line">|</span>
				          <span>重庆</span>
				          <i></i>
				        </a>
				       </div>
				       <p className="search-text">
				         <a href="#">
				         <input type="search" placeholder="搜索商品和品牌" disabled="disabled"/>
				         <span className="seach-ico"></span>
				        </a>
				       </p>
				       <a className="info">
				        <img src="https://static.epetbar.com/static_web/wap/src/images/mydope.png" />
				       </a>
				    </div>
				    {
				    	//				    -----------------------------导航部分--------------------------------- 
				    }
				 </div>
				 {
            //				 	导航部分开始
				 }
				 <div className="find_nav">
                       <div className="nav_scroll">
                        <ul className="scroll_ul">
                        {
//                       <li className="scroll_li">
//                         <a>
//                          <span className="main">
//                             <span>首页</span>
//                             <i></i>
//                          </span>        
//                         </a>
//                       </li>           
//                       
//                    
//                       <li className="scroll_li">
//                         <a>
//                          <span>
//                             <span>日用外出</span>
//                             <i></i>
//                          </span>        
//                         </a>
//                       </li>
             }
                   {
		              this.state.homenavlist.map((item, index) => {
		                return (
		                   <li className="scroll_li">
                           <a>
                            <span class="main">
                               <span>{item.menu_name}</span>
                               <i></i>
                            </span>        
                           </a>
                         </li>
		                )
		              })
                    }
                        
                        </ul>
                       </div>
                    </div>
                 {
               //				 	导航部分结束
				 }
				 <div className="content">
                  {
                  	//	      放置可以滚动的区域 轮播图
                  } 
                  <Banner bannerdata = {this.state.homebannerlist}/>
                  <Menu/>
                  <div className="newCustom">
                    <a><img src="https://img2.epetbar.com/nowater/2017-12/18/09/60c354a5d94be9fd114523ee77259c73.gif" /></a>
                  </div>
                  <Surprise />
                  {
//                	广告
                  }
                  <div className="ad">
                     <div className="adLeft">
                       <a>
                       <img src="https://img2.epetbar.com/nowater/2017-12/13/09/1ec9379f83eb421db9a09195c9594e29.jpg@!water" />
                      </a>
                     </div>
                     <div className="adRight">
                        <a>
                         <img src="https://img2.epetbar.com/nowater/2018-03/04/09/6c2998af853e701a2f884b92066058e5.jpg@!water" />
                        </a>
                        <a>
                         <img src="https://img2.epetbar.com/nowater/2018-02/22/10/8beae6b2a068996df0a0b9e5d62bed99.jpg@!water" />
                        </a>
                     </div>
                  </div>
                  <div className="pre">
                   <a>
                    <img src="https://img2.epetbar.com/nowater/2018-03/27/18/246a2e9285667fe5ec436f908dc9df26.jpg@!water"/>
                   </a>
                  </div>
                  <Chao/>
                  <Sale/>
                  <Cutefoot/>
                  <Cutetalk/>
                  <Smalldot/>
                  <Homeend/>
				 </div>	
				 
			</div>
		)
	}
	componentDidMount() {
		homeData.homenavlist((data)=> {
			store.dispatch({
            type: "GET_HOMENAV",
            data: data       
          })
			this.setState({
				homenavlist:store.getState().homenav[0][0].menus
			})
		})
		homeData.homebannerlist((data)=> {
			store.dispatch({
            type: "GET_HOMEBANNER",
            data: data       
          })
			this.setState({
				homebannerlist:store.getState().homebanner
			})
		})
     
	}
}
export default Model;
