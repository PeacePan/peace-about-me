import React, { Component } from 'react';
import { Button } from 'material-ui';

import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="page page-home animated fadeIn">
                <div className="greeting-wrapper">
                    <div className="words greeting-text">嗨！我叫 潘銘和 (Peace)</div>
                    <div className="words job-title">前端工程師</div>
                    <div className="words short-intro">一個隨著資訊技術發展，默默持續學習的工程師</div>
                </div>
                <div className="words interest-me">↓↓如果你對我有興趣的話↓↓</div>

                <Button
                    className="download-cv"
                    href="http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf"
                    target="_blank">
                    DOWNLOAD MY CV
                </Button>
            </div>
        );
    }
}

export default Home;
