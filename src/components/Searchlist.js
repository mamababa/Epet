import React, { Component } from 'react';
import '@/css/search.scss'
import homeData from '@/api/homeData'
import '@/css/searchlist.scss'
import store from '@/redux/store/index.js'
import { Switch, Route, Redirect, NavLink  } from 'react-router-dom';
import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';
const data = [
  {
    value: '1',
    label: '默认排序',
  }, {
    value: '2',
    label: '按人气',
  },
  {
    value: '3',
    label: '最新上架',
    isLeaf: true,
  },
  {
    value: '4',
    label: '按评论',
    isLeaf: true,
  },
];
class Model extends Component {
	
	state = {
		searchhot:[],
		key:'',
		flag:false,
		initData: '',
        show: false,
	}
	onChange = (value) => {
    let label = '';
    data.forEach((dataItem) => {
      if (dataItem.value === value[0]) {
        label = dataItem.label;
        if (dataItem.children && value[1]) {
          dataItem.children.forEach((cItem) => {
            if (cItem.value === value[1]) {
              label += ` ${cItem.label}`;
            }
          });
        }
      }
    });
    console.log(label);
  }
	handleClick = (e) => {
    e.preventDefault(); // Fix event propagation on Android
    this.setState({
      show: !this.state.show,
    });
    // mock for async data loading
    if (!this.state.initData) {
      setTimeout(() => {
        this.setState({
          initData: data,
        });
      }, 500);
    }
  }
  onMaskClick = () => {
    this.setState({
      show: false,
    });
  }
	handleScroll (e,v) {
//		if(e.target.scrollHeight>200) {
//			this.refs.navarea1.className= 'navarea tabfix';	
//		}else {
//			console.log('909090')
//          this.refs.navarea1.className= 'navarea';
//		}
	}
	menu() {
		console.log("--------------")
		if(!this.state.flag) {
			this.refs.headerquick.style.display ='block';
			this.setState({
				flag:true
			})
		}else {
			this.refs.headerquick.style.display ='none';
			this.setState({
				flag:false
			})
		}
		
	}
	render() {
		const { initData, show } = this.state;
		const menuEl = (
	      <Menu
	        className="single-foo-menu"
	        data={initData}
	        value={['1']}
	        level={1}
	        onChange={this.onChange}
	        height={document.documentElement.clientHeight * 0.6}
	      />
        );
        const loadingEl = (
	      <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
	        <ActivityIndicator size="large" />
	      </div>
         );
		return (
			<div className="box">
				 <div className="download"> 
				    <a>
				      <img src="https://img2.epetbar.com/nowater/2017-12/13/18/c63b6e6cf483cbb61196f658920a9d6e.jpg@!water"/>
				    </a>
				 </div>
			   	
				 <div className="content" onScroll={this.handleScroll.bind(this)}>
				     <div className="listheader">
				         <a href="javascript:history.back()"></a>
				          <span className="title">商品列表</span>
				          <span className="pullright" onClick={this.menu.bind(this)}></span>
				     </div>
				     <div className="header_quick" ref="headerquick">
				       
				         <NavLink to="/home" activeClassName="active">
			                 <span className="iconfont icon-shouye"></span>
				             <p>首页</p>
                         </NavLink>
				        <NavLink to="/kind" activeClassName="active">
				         <span className="iconfont icon-shangpinfenlei"></span>
				          <p>商品分类</p>
				       </NavLink>
				        <NavLink to="/cart" activeClassName="active">
				         <span className="iconfont icon-unie62d mycart">
				           <em>0</em>
				         </span>
				          <p>购物车</p>
				       </NavLink>
				        <NavLink to="/user" activeClassName="active">
				         <span className="iconfont icon-unie62d"></span>
				          <p>我的e宠</p>
				       </NavLink>
				     </div>
				     <div className="listbox">
				         <div className="searchwrap">
				            <div className="searchwrap_con">
				               <i className="iconfont icon-search"></i>
				               <input type="text" value={this.state.key} disabled="disabled"/>
				            </div>
				         </div>
				         
				         <div className="navarea" ref="navarea1">
				            <ul>
				             <li>
				                默认
				                <span className="iconfont icon-jiantou-copy-copy defau"></span>
				             </li>
				             <li>
				                销量
				             </li>
				             <li>
				                价格
				                <span className="iconfont icon-biaotou-kepaixu price"></span>
				             </li>
				             <li>
				                筛选
				                <span className="iconfont icon-shaixuan shai"></span>
				             </li>
				            </ul>
				         </div>
                           
				         <div className={show ? 'single-menu-active' : ''}>
					        <div>
					          <NavBar
					            mode="light"
					            onLeftClick={this.handleClick}
					            className="single-top-nav-bar"
					          >
					          <div className="navarea firstli" ref="navarea1" onClick={this.handleClick.bind(this)}>
				               <ul>
					             <li>
					                默认
					                <span className="iconfont icon-jiantou-copy-copy defau"></span>
					             </li>
				              </ul>
				             </div>
					           
					            
					          </NavBar>
					        </div>
					        {show ? initData ? menuEl : loadingEl : null}
					        {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
                        </div>
				         <ul className="list-start">
				         {
				              this.state.searchhot.map((item, index) => {
				                return (
				                	<li key={index}>
							            <img className="imgSrc" src={item.photo}/>
							            <div className="list_fr">
							              <h1>
							              {item.subject}
							              </h1>
							              <p className="cishan">
							                {
								              item.activityLabels.map((item1, index1) => {
								                return (
								                	 <a key={index1}>
							                           <img src={item1.image}/>
							                         </a>      
								                )
								              })
                                            }
							               
							              </p>
							              <div className="goodprice">
							                <span className="price">{item.sale_price}</span>
							                <span className="perprice">{item.market_price}</span>
							              </div>
							               <div className="rategood">
							                <span className="hudong">{item.comments}</span>
							                <span className="sale">{item.sold}</span>
							              </div>
							            </div>
							            <div className="cart">
							              <img src="https://static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png"/>
							            </div>
				                   </li>
				                )
				              })
                         }
				           
				         </ul>
				         {
//				         	找不到商品
				         }
				         <div className="failfind" ref="failfind">
				           <img src="https://static.epetbar.com/static_web/wap/src/images/noimages/nodata_stance.png"/>
				           <p>sorry～当前未找到"<font color="#E83A2A">{this.state.key}</font>"相关的结果！</p>
				         </div>
				     </div>
				 </div>
			</div>
		)
	}
	componentDidMount() {
		console.log(this);
       var keyword = this.props.match.params.id;
      homeData.searchtotal((data)=> {
			  console.log(data);
			  if(data.list.length != 0) {
			  	 this.setState({
			    	searchhot:data.list,
			    	key:keyword
			     })
			  }else {
			  	this.refs.failfind.style.display='block';
			  	this.setState({
			  		key:keyword
			  	})
			  }
			 
          },keyword)
      }
	}
export default Model;