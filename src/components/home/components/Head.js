import React, {
	Component
} from 'react';
import Search from './search.js';
import Banner from './Banner.js';
class Head extends Component {
	render() {
		return (
			<header>
				<Search />
				<Banner />
			</header>
		)
	}
}

export default Head;