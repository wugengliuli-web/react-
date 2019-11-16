import React, {
	Component
} from 'react';

import axios from 'axios';
import Header from './sort/components/sortSearch.js'
import '../css/searchMain.css'
class Search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			list: []
		}
		this.getList = this.getList.bind(this);
	}
	componentDidMount() {
		this.getList();
	}
	render() {
		return (
			<div>
				<Header />
				<div className="searchMain">
					<h3>热门搜索</h3>
					<div className="searchList">
						<ul>
							{
								this.state.list.map((v,i) => {
									return (
										<li key={i} className={v.isHOT? 'on':''}>
											{v.name}
										</li>
									)
								})
							}
						</ul>
					</div>
				</div>
			</div>
		)
	}
	getList() {
		axios.get('./api/hotSearch.json').then((data) => {
			let newArray = []; //对数组进行过滤
			data.data.forEach((v, i) => {
				if (v.isHOT) {
					newArray.push(v);
				}
			})
			data.data.forEach((v, i) => {
				if (!v.isHOT) {
					newArray.push(v);
				}
			})
			this.setState({
				list: newArray
			})
		})
	}
}

export default Search;