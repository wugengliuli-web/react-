import React, {
	Component,
	Fragment
} from 'react';
import {
	Link
} from 'react-router-dom'
import '../css/listMain.css'
import axios from 'axios';
import img from '../../../imgs/phone.png'
class ListMain extends Component {
	constructor(props) {
		super(props)
		this.state = {
			list: [],
			active: 0,
			commodity: []
		}
		this.getList = this.getList.bind(this);
		this.getCommodity = this.getCommodity.bind(this);
		this.changeActive = this.changeActive.bind(this);
	}
	componentDidMount() {
		this.getList();
		this.getCommodity()
	}
	render() {
		return (
			<Fragment>
				<div className="listMain">
					<div className="left">
						<ul>
							{
								this.state.list.map((v,i) => {
									return (
										<li key={i} className={this.state.active == i ? 'active' : ''} data-geturl={v.getJsonUrl} onClick={(e) => {this.changeActive(e);this.getCommodity(e)}} data-index={i}>
											{v.name}
										</li>
									)
								})
							}
						</ul>
					</div>
					<div className="right">
						<ul>
							<h3 className="title">{ this.state.list[this.state.active]? this.state.list[this.state.active].name: "" }</h3>
							{
								this.state.commodity.map((v,i) => {
									return (
										<Link to={v.Link} key={i}>
											<li>
												<img src={img}/>
												<span>{v.name}</span>
											</li>
										</Link>
									)
								})
							}
						</ul>
					</div>
				</div>
				<div className="shelter"></div>
			</Fragment>
		)
	}
	getList() {
		axios.get('./api/listMain.json').then((data) => {
			this.setState({
				list: data.data
			})
		})
	}
	getCommodity(e) {
		let url
		if (e) {
			url = e.target.getAttribute('data-geturl');
		} else {
			url = './api/listMain/hot.json';
		}
		axios.get(url).then((data) => {
			this.setState({
				commodity: data.data
			})
		})
	}
	changeActive(e) {
		this.setState({
			active: e.target.getAttribute('data-index')
		})
	}
}

export default ListMain;