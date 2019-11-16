import React, {
	Component
} from 'react'
import axios from 'axios'
import '../css/button.css'
import {
	message,
	Button
} from 'antd';
import {
	connect
} from 'react-redux';
import 'antd/dist/antd.css'
class Btn extends Component {
	constructor(props) {
		super(props)
		this.state = {
			usersObj: []
		}
		this.getUsers = this.getUsers.bind(this);
		this.success = this.success.bind(this);
		this.error = this.error.bind(this);
		this.warning = this.warning.bind(this);
		this.login = this.login.bind(this);
	}
	componentDidMount() {
		this.getUsers();
	}
	render() {
		return (
			<div className="usersBtn">
				<div className="sign" onClick={this.login}>登录</div>
				<div className="oneSign">一键登录</div>
			</div>
		)
	}
	getUsers() {
		axios.get('./api/users.json').then((data) => {
			this.setState({
				usersObj: data.data
			})
		})
	}
	login() {
		if (this.props.userName == '' || this.props.passWord == '') {
			this.warning();
		} else {
			this.state.usersObj.some((v, i) => {
				if (v.user == this.props.userName && v.passWord == this.props.passWord) {
					this.success();
					return true;
				}
				if (i == this.state.usersObj.length - 1) {
					this.error();
				}
			})

		}
	}
	success() {
		message.success('登录成功');
	}
	error() {
		message.error('密码或用户名错误');
	}
	warning() {
		message.warning('密码或用户名不能为空');
	}
}

const mapState = (state) => {
	return {
		userName: state.userName,
		passWord: state.passWord
	}
}

const mapDispatch = (dispathch) => {
	return {

	}
}


export default connect(mapState, mapDispatch)(Btn);