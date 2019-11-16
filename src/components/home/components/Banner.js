import React, {
	Component,
	Fragment
} from 'react';
import '../../../css/banner.css'
import img1 from '../../../imgs/01.dpg';
import img2 from '../../../imgs/02.dpg';
import img3 from '../../../imgs/03.dpg';
import img4 from '../../../imgs/04.dpg';
class Banner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgArray: [img1, img2, img3, img4],
			left: 0,
			timer: null,
			touchStart: 0,
			touchEnd: 0
		}
		this.setTimer = this.setTimer.bind(this);
		this.clearTimer = this.clearTimer.bind(this);
		this.btnClick = this.btnClick.bind(this);
		this.touchStart = this.touchStart.bind(this);
		this.touchEnd = this.touchEnd.bind(this);
	}
	componentDidMount() {
		this.setTimer();
	}
	render() {
		return (
			<div className="bannerWrapper">
				<ul style={{ width: (this.state.imgArray.length) * 20 + 'rem',transform: 'translateX(' + this.state.left + 'rem)' }} className="banner" onTouchStart={this.touchStart} onTouchEnd={this.touchEnd}>
					{
						this.state.imgArray.map((v,i) => {
							return <li key={i}><img src={v}/></li>
						})
					}
				</ul>
				<div className="btn">
					<ul>
						{
							this.state.imgArray.map((v,i) => {
								return <li key={v} data-index={i} onClick={this.btnClick} className={i == -this.state.left/20? 'on':''}></li>
							})
						}
					</ul>
				</div>
			</div>
		)
	}
	setTimer() {
		this.setState({
			timer: setInterval(() => {
				if (-this.state.left / 20 < this.state.imgArray.length - 1) {
					this.setState({
						left: this.state.left - 20
					})
				} else {
					this.setState({
						left: 0
					})
				}
			}, 3000)
		})
	}
	clearTimer() {
		clearInterval(this.state.timer)
		this.setTimer();
	}
	btnClick(e) {
		this.clearTimer();
		this.setState({
			left: -(parseInt(e.target.getAttribute('data-index')) * 20)
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
		}, () => {
			if (this.state.touchEnd - this.state.touchStart > 0) {
				if (this.state.left < 0) {
					this.setState({
						left: this.state.left + 20
					})
				}
			} else if (this.state.touchEnd - this.state.touchStart < 0) {
				if (-this.state.left / 20 < this.state.imgArray.length - 1) {
					this.setState({
						left: this.state.left - 20
					})
				}

			}
			this.clearTimer();
		})
	}
}

export default Banner;