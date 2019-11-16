import React, {
    Component,
    Fragment
} from 'react';
import {
    Route,
    HashRouter
} from 'react-router-dom';

import {
    Provider
} from 'react-redux';
import store from './store/store.js';
import Home from './components/home/Home.js'
import Sort from './components/sort/sort.js'
import Search from './components/search.js'
import Shopping from './components/shoppingCart/shoppingCart.js'
import Users from './components/users/users.js'
class App extends Component {
    constructor(props) {
        super(props)
        this.setSize();
    }
    render() {
        return (
            <Fragment>
                <Provider store={store}>
                    <HashRouter>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/sort" component={Sort} />
                        <Route exact path="/search" component={Search} />
                        <Route exact path="/shopping" component={Shopping} />
                        <Route exact path="/users" component={Users} />
                    </HashRouter>
                </Provider>
            </Fragment>
        )
    }
    //初始化em
    setSize() {
        var width = window.innerWidth;
        if (width > 600) {
            width = 600
        }
        var fontSize = parseFloat(window.getComputedStyle(document.documentElement).fontSize) || 16;
        var x = width * 16 / (20 * fontSize);
        document.documentElement.style.fontSize = x + 'px';
    }
}

export default App;