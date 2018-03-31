import React, { Component } from 'react';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
class Chao extends React.Component {
	render() {
		return (
			<div className="fashion">
			    <img className="chao_fl" src="https://img2.epetbar.com/nowater/2017-12/20/15/38688d8d92c7da7aae64eda8b8bb3a94.jpg" />	  
			   <a className="chao_fr">
			     <img src="https://img2.epetbar.com/nowater/2017-12/20/15/0855ecf27a6ca47b32170caab2503ddd.jpg"/>
			   </a>
			   <div className="fashion_con">
				   <div class="fashion_wrap">
				     <a>
				      <img src="https://img1.epetbar.com/2018-03/25/20/b5f04cc423667eb28ac5ffad49e72379.jpg?x-oss-process=style/waterfall&$1=500"/>
				      <span></span>
				    </a>
				     <div class="fashion_info">
				       <p className="brand">拉夫威尔 汽车安全胸背 爱犬坐车也安全</p>
				       <p className="brand_info">
				         <span className="firstSpan"></span>
				         <i>116205</i>
				         <span class="secondSpan">|</span>01:51
				       </p>
				     </div>
				       
				   </div>
		       </div>
		       {
		       	//服务
		       	}
		       <div className="service">
		         <div className="service_fl">
		           <a>
		             <img src="https://img2.epetbar.com/nowater/2018-02/05/14/4c32811744e04f6b63632b42a0d5325d.jpg@!water"/>
		           </a>
		            <a>
		             <img src="https://img2.epetbar.com/nowater/2018-02/05/14/fa66a0c8437b6fb8137c58d9b6ccb1c6.jpg@!water"/>
		           </a>
		         </div>
		         <div className="service_fr">
		          <a>
		             <img src="https://img2.epetbar.com/nowater/2018-02/05/14/9aa462284ec8a79694fa5c9ce062d5ab.jpg@!water"/>
		           </a>
		            <a>
		             <img src="https://img2.epetbar.com/nowater/2018-02/05/14/6e3a2cb186e1028d481940c42fb54732.jpg@!water"/>
		           </a>
		         </div>
		       </div>
			</div>
			
		  
			
		)
	}

 }
export default Chao;