import React, {
	Component
} from 'react';
import axios from 'axios';
import {
	Link
} from 'react-router-dom'
import {
	connect
} from 'react-redux'
import '../css/nav.css';
class Nav extends Component {
	constructor(props) {
		super(props)
		this.state = {
			navArray: [],
		}
	}
	componentDidMount() {
		axios.get('./api/Nav.json').then((data) => {
			this.setState({
				navArray: data.data
			})
		})
	}
	render() {
		return (
			<div className="nav">
				<ul>
					{
						this.state.navArray.map((v,i) => {
							return (
								<Link to={v.Link} key={i}>
									<li className={i==this.props.active? 'on':''} data-index={i} onClick={this.props.changeActive}>
										 <div className="icon">
										 	<i className="iconfont" dangerouslySetInnerHTML={{__html: v.icon}}></i>
										 </div>
										 <div className="title">
										 	<span>{v.name}</span>
										 </div> 
									</li>
								</Link>
							) 
						})  
					}
				</ul>
			</div>
		)
	}
}

const mapState = (state) => {
	return {
		active: state.active
	}
}

const mapDispatch = (dispatch) => {
	return {
		changeActive(e) {
			let index = parseInt(e.currentTarget.getAttribute('data-index'));
			const action = {
				type: 'changeActive',
				index: index
			}
			dispatch(action)
		}
	}
}

export default connect(mapState, mapDispatch)(Nav);