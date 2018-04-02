import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.scss';
import App from '@/components/App';
import Login from '@/components/Login';
import Register from '@/components/Register';
import Detail from '@/components/Detail';
import store from '@/redux/store/index.js';
import Search from '@/components/Search.js';
import Searchlist from '@/components/Searchlist.js'
function render() {
	ReactDOM.render(
	<Router>
	   <Switch>
	      <Route path="/register" component={Register} />
	      <Route path="/login" component={Login} />
	      <Route path="/detail" component={Detail} />
	      <Route path="/search/" component={Search} />
	      <Route path="/searchlist/:id" component={Searchlist} />
	      <Route path="/" component = {App} />
	   </Switch>  
	</Router>,
	document.getElementById('root'));
}
render();
registerServiceWorker();
store.subscribe(render);
