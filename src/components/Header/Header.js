import React from 'react';
import { withRouter } from 'react-router-dom';

import {
    AppBar, Toolbar, Typography,
    Button, IconButton, Hidden } from 'material-ui';
import { Menu as MenuIcon } from 'material-ui-icons';

import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);

        let nowRoute = window.location.pathname;
        this.tabs = [{
            title: '首頁',
            active: nowRoute === '/home',
            path: '/home'
        }, {
            title: '工作經歷',
            active: nowRoute === '/experience',
            path: '/experience'
        }, {
            title: '學歷',
            active: nowRoute === '/education',
            path: '/education'
        }];

        this.state = {
            tabs: this.tabs
        };

        this.changeTab = this.changeTab.bind(this);
    }

    changeTab(ev, key) {
        this.tabs.forEach((tab, i) => {
            if (i === key) {
                tab.active = true;
                this.props.history.replace(tab.path);
                return;
            }
            tab.active = false;
        });
        this.setState({ tabs: this.tabs });
    };

    render() {
        return (
            <AppBar className="over-write nav-header" position="fixed" color="inherit">
                <Toolbar className="nav-toolbar">
                    <Hidden smUp implementation="css">
                        <IconButton color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                    </Hidden>

                    <Hidden xsDown implementation="css">
                        <i className="fab fa-2x fa-product-hunt"></i>
                    </Hidden>

                    <Hidden xsDown implementation="css" className="nav-content">
                        <Typography variant="title" color="inherit">
                            {(() => {
                                return this.state.tabs.map((tab, i) => {
                                    return (
                                        <Button
                                            key={i}
                                            className={'nav-button' + (tab.active ? ' active' : '')}
                                            color="inherit"
                                            onClick={(ev) => this.changeTab(ev, i)}>
                                            {tab.title}
                                        </Button>
                                    );
                                });
                            })()}
                            <Button className="nav-button">
                                <a href="https://github.com/PeacePan" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i>&nbsp;Github
                                </a>
                            </Button>
                        </Typography>
                    </Hidden>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withRouter(Header);
