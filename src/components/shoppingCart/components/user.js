import React, {
	Component
} from 'react';
import '../css/user.css'
import img from '../../../imgs/shopping.png'
class User extends Component {
	render() {
		return (
			<div className="shoppingUser">
				<img src={img}/>
				<p>登录后可同步购物车中商品</p>
				<span>登录</span>
			</div>
		)
	}
}

export default User