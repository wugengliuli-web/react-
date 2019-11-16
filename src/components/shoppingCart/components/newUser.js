import React, {
	Component
} from 'react';
import '../css/newUser.css'
class Newuser extends Component {
	render() {
		return (
			<div className="shoppingNewUser">
				<div className="main">
					<div className="title">
						<div className="benefit">
							新用户福利
							<i></i>
							专属优惠礼包
						</div>
						<div className="get">一键领取</div>
					</div>
					<div className="mod_coupon_area">
						<div className="card">
							<div className="content">
								<span className="yen">￥</span>
								<span className="num">9</span>
								<span className="introduce">全品类可用</span>
							</div>
							<div className="condition">满150可用</div>
						</div>
						<div className="card">
							<div className="content">
								<span className="yen">￥</span>
								<span className="num">8</span>
								<span className="introduce">运费券</span>
							</div>
							<div className="condition">满0可用</div>
						</div>
						<div className="card">
							<div className="content">
								<span className="yen">￥</span>
								<span className="num">6</span>
								<span className="introduce">全品类可用</span>
							</div>
							<div className="condition">满120可用</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Newuser;