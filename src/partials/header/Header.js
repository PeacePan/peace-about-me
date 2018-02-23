import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import './Header.css';

const style = {
    header: {
        backgroundColor: '#ddd'
    },
    toolbar: {
        justifyContent: 'flex-end'
    }
};

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
                <AppBar position="static" color="inherit" style={style.header}>
                    <Toolbar style={style.toolbar}>
                        <div className="header-logo">
                            <FontAwesomeIcon icon={["fab", "earlybirds"]} size="2x" />
                        </div>
                        <Typography variant="title" color="inherit">
                            <Tabs value={value} onChange={this.handleChange}>
                                <Tab label="Home" component={Link} to="/"></Tab>
                                <Tab label="Awards" component={Link} to="/awards"></Tab>
                            </Tabs>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Header;
