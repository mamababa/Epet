import React, { Component } from 'react';
import homeData from '@/api/homeData'
import store from '@/redux/store/index.js'



class Sale extends Component {
	state = {
		salelist:[]
	}
	getdata () {
		console.log(this.state.salelist)
		console.log(typeof(this.state.salelist))
	}
	render() {
		return (
			<div class="sale">
			  <img className="sale_fl" src="https://img2.epetbar.com/nowater/2017-12/13/13/11acf905ca327ed7aae8f9b4851850a0.jpg" />	  
			   <a className="sale_fr">
			     <img src="https://img2.epetbar.com/nowater/2017-12/13/13/22f20febaae655371ef3766612102c0e.jpg"/>
			   </a>
			   {
//			   <div className="salead">
//			    <a>
//			     <img src="https://img2.epetbar.com/nowater/2018-03/26/17/e9b04aa41ff6b73ccde92d5979dbde2a.jpg@!water"/>
//			    </a>
//			   </div>
                }
			   {
		              this.state.salelist.map((item, index) => {
		                return (
		                  <div className="salead" key={item.id}>
			                 <a>
			                  <img src={item.imgsrc}/>
			                 </a>
			              </div>
		                )
		              })
                    }
			  
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
export default Sale;