import React, { Component } from 'react';

class Crazy extends Component{
  

  render(){
    
    return (
      <div className="surprise_day">
        <div className="surprise_tit">
          <div className="titimg"><img src="https://static.epetbar.com/static_wap/appmall/main/new_index_icon_suprice.png?version=03" /></div>
          <p className="nextstart">下一场开始</p>
          <div className="timego">
            <span className="shi">10</span>
            <span className="dian">:</span>
            <span className="fen">00</span>
          </div>
          <div className="more">
            <a>
              <img src="https://img2.epetbar.com/nowater/2018-02/02/12/80acfffe2d91b341fd2c8de903b3eace.png"/>
            </a>
          </div>
       </div>
        <div className = "surprise_con">
           <div className="surprise_Img">
              <a>
                <img src="https://img1.epetbar.com/2016-03/30/14/e5bf01932f72f7da0eb00934ca000e90.jpg?x-oss-process=style/fill&$1=300&$2=300"/>
                <p className="price">
                  ¥4.56
                </p>
                <p className="save">省41.04</p>
             </a>
             <a>
                <img src="https://img1.epetbar.com/2016-03/30/14/e5bf01932f72f7da0eb00934ca000e90.jpg?x-oss-process=style/fill&$1=300&$2=300"/>
                <p className="price">
                  ¥4.56
                </p>
                <p className="save">省41.04</p>
             </a>
             <a>
                <img src="https://img1.epetbar.com/2016-03/30/14/e5bf01932f72f7da0eb00934ca000e90.jpg?x-oss-process=style/fill&$1=300&$2=300"/>
                <p className="price">
                  ¥4.56
                </p>
                <p className="save">省41.04</p>
             </a>
             <a>
                <img src="https://img1.epetbar.com/2016-03/30/14/e5bf01932f72f7da0eb00934ca000e90.jpg?x-oss-process=style/fill&$1=300&$2=300"/>
                <p className="price">
                  ¥4.56
                </p>
                <p className="save">省41.04</p>
             </a>
           </div>
        </div>
      </div>
    )
  }
  componentDidMount(){
    
  }
}
export default Crazy;
