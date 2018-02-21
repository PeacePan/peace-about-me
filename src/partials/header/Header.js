import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

class Header extends Component {
    state = {
        value: 0,
    };

    handleChange = (ev, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;

        return (
            <div className="nav-header">
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="Home" component={Link} to="/home"></Tab>
                        <Tab label="Awards" component={Link} to="/awards"></Tab>
                    </Tabs>
                </AppBar>
            </div>
        );
    }
}

export default Header;
