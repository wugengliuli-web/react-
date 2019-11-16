import React, {
	Component
} from 'react';
import {
	Link
} from 'react-router-dom'
import axios from 'axios';
import '../../../css/bottom.css'
import img1 from '../../../imgs/catchImg.gif'
import img2 from '../../../imgs/time.dpg'

import list1 from '../../../imgs/commodity1.dpg'
import list2 from '../../../imgs/commodity2.png'
import list3 from '../../../imgs/commodity3.dpg'
import list4 from '../../../imgs/commodity4.dpg'
import list5 from '../../../imgs/commodity5.dpg'
import list6 from '../../../imgs/commodity6.dpg'
import list7 from '../../../imgs/commodity7.dpg'
import list8 from '../../../imgs/commodity8.dpg'
import list9 from '../../../imgs/commodity9.png'
class Bottom extends Component {
	constructor(props) {
		super(props)
		this.state = {
			time: '',
			h: '',
			m: '',
			s: '',
			imgArray: [list1, list2, list3, list4, list5, list6, list7, list8, list9],
			list: []
		}
		this.getTime = this.getTime.bind(this)
		this.getList = this.getList.bind(this)
	}
	componentDidMount() {
		this.getList();
		this.getTime();
		setInterval(() => {
			this.getTime();
		}, 1000)
	}
	render() {
		return (
			<div className="bottomWrapper">
				<div className="catchImg">
					<img src={img1}></img>
				</div>
				<div className="time">
					<img src={img2}></img>
				</div>
				<div className="commodityContainer">
					<div className="commodity">
						<div className="top">
							<div className="left">
								<div className="img"></div>
								<strong>{this.state.time}</strong>
								<div className="seckill-timer">
									<div>{this.state.h}</div>
									<span>:</span>
									<div>{this.state.m}</div>
									<span>:</span>
									<div>{this.state.s}</div>
								</div>
							</div>
							<div className="right">
								<Link to="/">
									更多秒杀
									<i></i>
								</Link>
							</div>
						</div>
						<div className="list">
							<ul style={{width:  this.state.imgArray.length * 94 + 'px' }}>
								{
									this.state.list.map((v,i) => {
										return (
											<li key={i}>
												<img src={this.state.imgArray[i]} />
												<p className="newPrice">
													<em>￥</em>
													{v.newPrice}
												</p>
												<del className="oldPrice">
													<em>￥</em>
													{v.oldPrice}
												</del>
											</li>
										)
									})
								}
							</ul>
						</div>
					</div>
				</div>
				<div className="shelter"></div>
			</div>
		)
	}
	getTime() {
		var t = new Date()
		let h = t.getHours();
		let m = t.getMinutes();
		let s = t.getSeconds();
		let time;
		if (h % 2 == 0) {
			time = h + '点场';
			h = '01';
			m = 60 - m - 1;
			s = 60 - s;
			if (m < 10) {
				m = '0' + m
			}
			if (s < 10) {
				s = '0' + s
			}
		} else {
			time = (h - 1) + '点场';
			h = '00';
			m = 60 - m - 1;
			s = 60 - s;
			if (m < 10) {
				m = '0' + m
			}
			if (s < 10) {
				s = '0' + s
			}
		}
		this.setState({
			time,
			h,
			m,
			s
		})
	}
	getList() {
		axios.get('./api/list.json').then((data) => {
			this.setState({
				list: data.data
			})
		})
	}
}

export default Bottom;