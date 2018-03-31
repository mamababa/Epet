import React, { Component } from 'react';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import store from '@/redux/store/index.js'
import homeData from '@/api/homeData'
class Banner extends React.Component {
	state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
    slideIndex: 0,
    banner:[]
  }
	getData() {
		console.log(this.state.banner);
	}
  componentDidMount() {
    // simulate img loading
      homeData.homebannerlist((data)=> {
			store.dispatch({
            type: "GET_HOMEBANNER",
            data: data       
          })
			this.setState({
				data:store.getState().homebanner[0]
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
                src={val.img_src}
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
        
        )
}
	 }
export default Banner;