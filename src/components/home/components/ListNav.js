import React, {
	Component
} from 'react';
import {
	Link
} from 'react-router-dom'
import '../../../css/ListNav.css';
import axios from 'axios';
import img1 from '../../../imgs/01.png';
import img2 from '../../../imgs/02.png';
import img3 from '../../../imgs/03.png';
import img4 from '../../../imgs/04.png';
import img5 from '../../../imgs/05.png';
import img6 from '../../../imgs/06.png';
import img7 from '../../../imgs/07.png';
import img8 from '../../../imgs/08.png';
import img9 from '../../../imgs/09.png';
import img10 from '../../../imgs/10.png';
class ListNav extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isLeft: true,
			obj: [[],[]],
			imgArray: [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10],
			touchStart: 0,
			touchEnd: 0
		}
		this.changeActive = this.changeActive.bind(this)
		this.touchStart = this.touchStart.bind(this)
		this.touchEnd = this.touchEnd.bind(this)
	}
	componentDidMount() {
		axios.get('./api/ListNav.json').then(data => {
			this.setState({
				obj: data.data
			})
		})
	}
	render() {
			return (
					<div  className="ListWrapper">
				<div className={this.state.isLeft? 'list':'list on'} onTouchStart={this.touchStart} onTouchEnd={this.touchEnd}>
					<div className="left">
						<ul>
							{
								this.state.obj[0].map((v,i) => {
									return (
										<Link to={v.link} key={i}>
											<li>
												<img src={this.state.imgArray[i]}/>
												<span>{v.name}</span>
											</li>
										</Link>
									)
								})
							}
						</ul>
					</div>
					<div className="right">
						<ul>
							{
								this.state.obj[1].map((v,i) => {
									return (
										<Link to={v.link} key={i}>
											<li>
												<img src={this.state.imgArray[i]}/>
												<span>{v.name}</span>
											</li>
										</Link>
									)
								})
							}
						</ul>
					</div>
				</div>
				<div className="btn">
					<span className={this.state.isLeft? 'active':''} onClick={this.changeActive}></span>
					<span className={!this.state.isLeft? 'active':''} onClick={this.changeActive}></span>
				</div>
			</div>
		)
	}
	changeActive() {
		this.setState({
			isLeft: !this.state.isLeft
		})
	}
	touchStart(e) {
		this.setState({
			touchStart: e.targetTouches[0].pageX
		})
	}
	touchEnd(e) {
		this.setState({
			touchEnd: e.changedTouches[0].pageX
		},() => {
			if(this.state.touchEnd - this.state.touchStart > 0) {
				this.setState({
					isLeft: true
				})
			} else if(this.state.touchEnd - this.state.touchStart < 0) {
				this.setState({
					isLeft: false
				})
			}
		})
	}
}

export default ListNav;

//