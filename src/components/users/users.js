import React, {
	Component
} from 'react'
import Header from '../shoppingCart/components/header.js'
import Input from './components/input.js'
import Btn from './components/button.js'


class Users extends Component {
	render() {
		return (
			<div>
				<Header title={'京东登录'}/>
				<Input />
				<Btn />
			</div>
		)
	}
}

export default Users