import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

class Model extends Component {
  
  state = {
    
  }
  goPageHandler(type, flag){
    this.props.history.push({
      pathname: "/"+ type,
      state:{
        flag: flag
      }
    })
  }
  render() {
    
    return (
      <div className="box">
        <header>
        </header>
        <div className = "content">
          <WingBlank>
              <WhiteSpace />
              <WhiteSpace />
              <WhiteSpace />
              <Button type="primary" onClick = { this.goPageHandler.bind(this, 'login','user')} inline style={{ marginRight: '15px' }}>登录</Button>
              <Button type = "ghost" onClick = { this.goPageHandler.bind(this, 'register','user')} inline >注册</Button>
          </WingBlank>
        </div>
      </div>
    )
  }
  
  componentDidMount() {
    
  }
  
}

export default Model;