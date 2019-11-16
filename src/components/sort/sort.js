import React, {
	Component,
	Fragment
} from 'react';
import SortSearch from './components/sortSearch.js';
import Nav from '../nav.js';
import ListMain from './components/listMain.js'
class Sort extends Component {
	render() {
		return (
			<Fragment>
				<SortSearch />
				<ListMain />
				<Nav />
			</Fragment>
		)
	}
}

export default Sort;