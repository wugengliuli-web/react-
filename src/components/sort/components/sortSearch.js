import React, {
	Component
} from 'react'
import {
	Link
} from 'react-router-dom'
import {
	connect
} from 'react-redux'
import axios from 'axios';
import '../css/sortHeader.css'
class sortSearch extends Component {
	render() {
		return (
			<div className="sortHeader">
				<div className="left">
					<Link to="/" onClick={this.props.returnHome}>
						<span></span>
					</Link>
				</div>
				<div className="middle">
					<i className="iconfont">&#xe615;</i>
					<Link to="/search">
						<input type="text" placeholder="清风抽纸"/>
					</Link>
				</div>
				<div className="right">
					<span></span>
				</div>
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
		returnHome() {
			const action = {
				type: 'returnHome'
			}
			dispatch(action)
		}
	}
}

export default connect(mapState, mapDispatch)(sortSearch);