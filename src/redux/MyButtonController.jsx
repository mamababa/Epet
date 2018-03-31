import React,{ Component } from 'react';
import MyButton from './Mybutton.jsx';
import store from './store/index.js';
class MyButtonController extends Component{
	constructor(props) {
		super(props)
		this.state = {
			val:'',
			flag:false
		}
	}
	getValHandler(event) {
		this.setState({
			val:event.target.value
		})
	}
	addItemHandler() {
		console.log(3333333)
		store.dispatch({
			type:"ADD_TODO_ITEM",
			data:"12344445"   //ajax获取
		})
		console.log(store.getState().todolist);
	}
	render() {
		return (
			<MyButton
			flag = { this.state.flag }
	        todolist = { store.getState().todolist }
//	        getVal = { this.getValHandler.bind(this)}
	        onClick = { this.addItemHandler.bind(this) }
//	        onDelfn = { this.delItemHandler.bind(this) }
			/>
		)
	}
	componentDidMount() {
		
	}
	
}
export default MyButtonController;
