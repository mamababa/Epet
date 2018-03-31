import React, { Component } from 'react';
import Img1 from './images/menu1.jpg';
import Img2 from './images/menu2.jpg';
import Img3 from './images/menu3.jpg';
import Img4 from './images/menu4.jpg';
import Img5 from './images/menu5.jpg';
import Img6 from './images/menu6.jpg';
import Img7 from './images/menu7.jpg';
import Img8 from './images/menu8.jpg';
import Img9 from './images/menu9.jpg';
import Img10 from './images/menu10.jpg';
class Menu extends Component {
	state = {
		
	}
	render() {
		return (
			<div className="columnnavdiv">
			 <ul>
			  <li>
			    <a>
			     <img src={Img1}/>
			    </a>
			  </li>
			  <li>
			    <a>
			     <img src={Img2}/>
			    </a>
			  </li>
			  <li>
			    <a>
			     <img src={Img3}/>
			    </a>
			  </li>
			  <li>
			    <a>
			     <img src={Img4}/>
			    </a>
			  </li>
			  <li>
			    <a>
			     <img src={Img5}/>
			    </a>
			  </li>
			  <li>
			    <a>
			     <img src={Img6}/>
			    </a>
			  </li>
			  <li>
			    <a>
			     <img src={Img7}/>
			    </a>
			  </li>
			  <li>
			    <a>
			     <img src={Img8}/>
			    </a>
			  </li>
			<li>
			    <a>
			     <img src={Img9}/>
			    </a>
			  </li>
			  <li>
			    <a>
			     <img src={Img10}/>
			    </a>
			  </li>
			 </ul>
			</div>
		)
	}
	componentDidMount() {
		console.log(this)
	}
}
export default Menu;