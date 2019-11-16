import React, {
	Component
} from 'react';
import {
	Link
} from 'react-router-dom'
import {
	connect
} from 'react-redux'
import '../../../css/search.css'
class Search extends Component {
	render() {
		return (
			<div className="headSearch">
				<div className="left" onClick={this.props.goSort}>
					<Link to="sort">
						<span><i className="iconfont">&#xe62f;</i></span>
					</Link>
				</div>
				<div className="middle">
					<div className="main">
						<div className="logo">
							<i></i>
						</div>
						<div className="searchMain">
							<i className="iconfont">&#xe615;</i>
							<Link to="/search">
								<input type="text" placeholder="JD" />
							</Link>
						</div>
					</div>
				</div>
				<div className="right">
					<span>登录</span>
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
		goSort() {
			const action = {
				type: 'goSort'
			}
			dispatch(action)
		}
	}
}

export default connect(mapState, mapDispatch)(Search);