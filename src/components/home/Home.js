import React, {
	Component,
	Fragment
} from 'react';
import Nav from '../nav.js';
import Head from './components/Head.js';
import ListNav from './components/ListNav.js'
import Bottom from './components/Bottom.js'
class Home extends Component {
	render() {
		return (
			<Fragment>
				<Head />
				<ListNav />
				<Bottom />
				<Nav />
			</Fragment>
		)
	}
}

export default Home;