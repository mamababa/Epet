import React, { Component } from 'react';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import store from '@/redux/store/index.js'
import homeData from '@/api/homeData'
class Cutefoot extends React.Component {
	state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
    slideIndex: 0,
    cutefoot:[],
    home:[]
  }
	getData() {
		console.log(store.getState());
	}
  componentDidMount() {
    // simulate img loading
      homeData.homeleaguelist((data)=> {
			store.dispatch({
            type: "GET_HOMELEAGUE",
            data: data       
          })
			this.setState({
				data:store.getState().homeleague[0]
			})
		})
//  setTimeout(() => {
//    this.setState({
//      data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
//    });
//  }, 100);
  }
 render() {
    return (
    	<div className="cutefoot">
    	  <img  className="foot_fl" src="https://img2.epetbar.com/nowater/2018-02/07/10/79d53b0ab1c8a630802d74b5beb0a632.jpg" />
    	   <a>
    	    <img className="foot_fr" src="https://img2.epetbar.com/nowater/2017-12/13/14/36046f2f89b3825c77b70ac89f5c7ad2.jpg"/>
    	   </a>
    	   <Carousel
          autoplay={true}
          infinite
          selectedIndex={1}
//        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
//        afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map((val,index) => (
            <a
              key={index}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val.src}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        
    	</div>
        
        
        )
}
	 }
export default Cutefoot;