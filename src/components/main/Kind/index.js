import React, { Component } from 'react';
import '@/css/kind.scss'
import homeData from '@/api/homeData'
import store from '@/redux/store/index.js'
class Model extends Component {
	state = {
		kindsidebar:[],
		one:[],
		kindbrand:[]
	}
	changeKind(Index) {
		
		this.setState({
			    one:store.getState().kindsidebar[0][Index].cate_list   
		})
		var all = document.getElementsByClassName('myli');
		
		for(var i = 0;i<all.length;i++) {
			all[i].className = 'myli';
			all[i].style.color ='#333';
			all[i].style.background ='#fff';
		}
		all[Index].className = 'myli on';
		all[Index].style.color ='#ed4044';
		all[Index].style.background = '#f3f4f5';

	}
	bigbox() {
		var bigbox = document.getElementsByClassName("bigbox")[0];
		var totalbrand = document.getElementsByClassName("totalBrand")[0];
		
		bigbox.style.display = 'block';
		totalbrand.style.display = 'none';
		var headertip = document.getElementsByClassName("headertip");
		for(var i = 0;i<headertip.length;i++) {
			headertip[i].className = "headertip";
		}
		headertip[0].className = "headertip select";
	}
	totalbrand() {
		var bigbox = document.getElementsByClassName("bigbox")[0];
		var totalbrand = document.getElementsByClassName("totalBrand")[0];
		var headertip = document.getElementsByClassName("headertip");
		bigbox.style.display = 'none';
		totalbrand.style.display = 'block';
		for(var i = 0;i<headertip.length;i++) {
			headertip[i].className = "headertip";
		}
		headertip[1].className = "headertip select";
	}
	search() {
		this.props.history.push({
           pathname:"/search"
        })
	}
	getBrand() {
		
	}
	render() {
		return (
			<div className="box">
			 <div className="header">
			   <div className="headerfl">
			       <a>
			        <span className="select headertip" onClick={this.bigbox}>分类</span>
			       </a>
			  </div>
			   <div className="headerfr">
			       <a>
			        <span className="headertip" onClick={this.totalbrand}>品牌</span>
			       </a>
			   <img src="https://static.epetbar.com/static_web/wap/src/images/background/search-ico.png" onClick={this.search.bind(this)}/>
			   </div>
			 </div>
			 <div className="content">
			   <div className = "bigbox" >
			    <div className="leftbox">
			    <div>
			      <ul>    
			      {
		              this.state.kindsidebar.map((item, index) => {
		                return (
		                	
		                   <li key={item.cateid} data-id={item.cateid} onClick={this.changeKind.bind(this,index)} ref="Myli" className="myli">
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
			                  <a href="javascript:void();" className="hottitle">{item.title} </a>
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
			    {
			    	//			    品牌开始
			    }
                <div className="totalBrand" >
                 {
		              this.state.kindbrand.map((item, index) => {
		                return (
		                   <div className="brandlist">
                            <div className="title">
                              <span>—— {item.title}——</span>
                            </div>
		                      <ul className="list">
		                        {
					              item.list.map((item1, index1) => {
					                return (
					                  <li>
		                               <a>
			                             <div>
			                               <img src={item1.logo} />
			                             </div>
		                                 <p className="name">{item1.name}</p>
		                                 <p className="address">{item1.address}</p>
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
                     <div className="lookup">
		                 <a>全部</a>
		              </div>

                </div>
			 </div>
			</div>
		)
	}
	componentDidMount() {
		homeData.kindsidebarlist((data)=> {
			store.dispatch({
            type: "GET_KINDSIDEBAR",
            data: data       
          })
			this.setState({
				kindsidebar:store.getState().kindsidebar[0],		
				one:store.getState().kindsidebar[0][0].cate_list
			})
		})
		homeData.kindbrandlist((data)=> {
			store.dispatch({
            type: "GET_KINDBRAND",
            data: data       
          })
			this.setState({
				kindbrand:store.getState().kindbrand[0],		
			})
			console.log(this.state.kindbrand)
		})
		
	}
}
export default Model;