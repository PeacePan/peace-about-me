import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.tabs = [{
            title: '首頁',
            active: true,
            path: '/home'
        }, {
            title: '工作經歷',
            active: false,
            path: '/experience'
        }, {
            title: '學歷',
            active: false,
            path: '/education'
        }];

        this.state = {
            tabs: this.tabs
        };

        this.changeTab = this.changeTab.bind(this);
    }

    changeTab(ev, key) {
        this.tabs.forEach((tab, i) => {
            tab.active = i === key ? true : false;
        });
        this.setState({ tabs: this.tabs });
    };

    render() {
        const { value } = this.state;

        return (
            <nav className="nav-header">
                <div className="header-item header-logo">
                    <i className="fa fa-2x fa-lock" />
                </div>
                <div className="header-item header-toolbar">
                    {(() => {
                        return this.state.tabs.map((tab, i) => {
                            return (
                                <div
                                    key={i}
                                    className={'header-tab' + (tab.active ? ' active' : '')}
                                    onClick={(ev) => this.changeTab(ev, i)}>
                                    <span>{tab.title}</span>
                                </div>
                            );
                        });
                    })()}

                    <div className="header-tab">
                        <a href="https://github.com/PeacePan" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github"></i>&nbsp;Github
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default withRouter(Header);
