import React, { Component } from 'react';

import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="page page-home">
                <div className="side-panel left-side">
                    <div className="skill-overview">
                        <div className="content">
                        </div>
                    </div>
                    <div className="job-experience">
                        <div className="content">
                        </div>
                    </div>
                </div>
                <div className="side-panel right-side">
                    <div className="introduce-myself">嗨！你好！我叫 Peace</div>
                </div>
            </div>
        );
    }
}

export default Home;
