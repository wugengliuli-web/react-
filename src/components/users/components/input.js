import React, {
	Component
} from 'react'
import '../css/input.css'
import {
	connect
} from 'react-redux'
class Input extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: '',
			passWord: ''
		}
	}
	render() {
		return (
			<div className="input">
				<div className="userName">
					<input type="text" placeholder="用户名/邮箱/已验证手机" onBlur={this.props.getUserName}/>
				</div>
				<div className="passWord">
					<input type="passWord" placeholder="请输入密码" onBlur={this.props.getPassWord}/>
					<div className="down"></div>
					<div className="forgetPass">忘记密码</div>
				</div>
			</div>
		)
	}
}

const mapState = (state) => {
	return {
		userName: state.userName,
		passWord: state.passWord
	}
}

const mapDispatch = (dispatch) => {
	return {
		getUserName(e) {
			const action = {
				type: 'getUserName',
				userName: e.target.value
			}
			dispatch(action)

		},
		getPassWord(e) {
			const action = {
				type: 'getPassWord',
				passWord: e.target.value
			}
			dispatch(action)
		}
	}
}

export default connect(mapState, mapDispatch)(Input)