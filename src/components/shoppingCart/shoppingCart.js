import React, {
	Component
} from 'react';
import Header from './components/header.js'
import User from './components/user.js';
import Newuser from './components/newUser.js'
class Shopping extends Component {
	render() {
		return (
			<div>
				<Header title={'购物车'}/>
				<User />
				<Newuser />
			</div>
		)
	}
}

export default Shopping;