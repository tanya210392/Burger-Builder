import React, {Component} from 'react';

import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css';

class Layout extends Component {
    state = {
        showSideDrower: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrower: false
        })
    };

    sideDrawerToggleHandler = () => {
        this.setState(prevState => {
            return {
                showSideDrower: !prevState.showSideDrower
            }
        })
    };

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    closed={this.sideDrawerClosedHandler}
                    open={this.state.showSideDrower}
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;