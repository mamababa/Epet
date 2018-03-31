import React, { Component } from 'react';
import { List,Button,InputItem,Toast,WhiteSpace } from 'antd-mobile';
import userData from '@/api/userData'
class App extends Component {
	state = {
		hasPhoneError :false,
		hasPasswordError:false,
		phonevalue:'',
		passwordvalue:'',
		codevalue:'',
	}
	onPhoneErrorClick = ()=> {
		if(this.state.hasPhoneError) {
			Toast.info ("请输入正确的手机号");
		}
	}
	onPasswordErrorClick = ()=> {
		if(this.state.hasPasswordError) {
			Toast.info("请输入正确的密码");
		}
	}
	
	onPhoneChange = (value)=> {
		if(value.replace(/\s/g,'').length <11) {
			this.setState({
			hasPhoneError:true,
			});
		}else {
			this.setState({
				hasPhoneError:false,
			})
		}
		this.setState({
			phonevalue:value
		})
	}
	onPasswordChange = (value)=> {
		if(value.replace(/\s/g,'').length<6) {
			this.setState({
				hasPasswordError:true,
			})
		}else {
			this.setState({
				hasPasswordError:false,
			})
		}
		this.setState({
			passwordvalue:value,
		})
	}
	getCode () {
		userData.register({
			phone:this.sstate.phonevalue,
			password:this.state.passwordvalue,
			code:this.state.codevalue
		},(data)=> {
			
		})
	}
	render() {
		return (
			<div className="App">
			 <div className="container">
			    <div className="box">
			     <header>
			       注册
			     </header>
			     <div className="content">
			      <WhiteSpace />
			       
			       <InputItem
			        type="phone"
			        placeholder="input your phone"
			        error={this.state.hasPhoneError}
			        onErrorClick = {this.onPhoneErrorClick}
			        onChange = {this.onPhoneChange}
			        value={this.state.phonevalue}
			       >手机号码</InputItem>
			      <WhiteSpace />
			       
			       <InputItem
			        type="password"
			        placeholder="input your password"
			        error={this.state.hasPasswordError}
			        onErrorClick = {this.onPasswordErrorClick}
			        onChange = {this.onPasswordChange}
			        value={this.state.passwordvalue}
			       >密码</InputItem>
			       <InputItem
			       type="number"
			       placeholder="验证码"
			       onChange = {this.onCodeChange}
			       value={this.state.codevalue}
			       extra={<Button type="ghost" size="small" style={ {color: "#f66",border:0} } inline>发送短信验证码</Button>}
                  onExtraClick = { this.getCode }
			       >验证码</InputItem>
			     </div>
			    </div>
			 </div>
			</div>
		)
	}
}
export default App;