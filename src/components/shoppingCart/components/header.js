import React, {
	Component
} from 'react';
import '../css/header.css'
import {
	connect
} from 'react-redux'
import {
	Link
} from 'react-router-dom'
class Header extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="shoppingHeader">
				<Link to="" onClick={this.props.goHome}>
					<div className="left"></div>
				</Link>	
				<div className="middle">{this.props.title}</div>
				<div className="right"></div>
			</div>
		)
	}
}

const mapState = (state) => {
	return {

	}
}

const mapDispatch = (dispatch) => {
	return {
		goHome() {
			const action = {
				type: 'returnHome'
			}
			dispatch(action)
		}
	}
}

export default connect(mapState, mapDispatch)(Header);