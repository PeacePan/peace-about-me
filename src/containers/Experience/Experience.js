import React from 'react';

import './Experience.css';

class Experience extends React.Component {
    render() {
        return (
            <div className="page page-home">
                <div className="side-panel">
                    <div className="intro-myself">
                        <div className="panel-content">
                            <h3 className="title intro-title">嗨！你好！我叫潘銘和</h3>
                            <hr/>
                            <p>我是現居台灣新北市的一個前端工程師，我喜歡編程。你可以叫我 Peace</p>
                        </div>
                    </div>

                    <div className="job-experience">
                        <div className="panel-content">
                            <h3 className="title job-title">工作經歷</h3>
                            <hr/>
                            <ul>
                                <li>
                                    <a href="http://www.geniusnet.com/" target="_blank" rel="noopener noreferrer">昆盈企業股份有限公司</a>
                                    <span>: App 研發工程師 (2016-08 ~ 2017-09)</span>
                                </li>
                                <li>
                                    <a href="http://www.charder.com.tw/" target="_blank" rel="noopener noreferrer">啟德電子股份有限公司</a>
                                    <span>: App 研發工程師 (2015-03 ~ 2016-06)</span>
                                </li>
                                <li>
                                    <a href="http://www.biostar.com.tw/" target="_blank" rel="noopener noreferrer">映泰股份有限公司</a>
                                    <span>: 演算法工程師 (2014-01 ~ 2015-02)</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="skill-overview">
                        <div className="panel-content">
                            <h3 className="title skill-title">技能樹</h3>
                            <hr/>
                            <div className="skill-container">

                            </div>
                        </div>
                    </div>
                </div>

                <div className="person-container">
                    <img src="image/person.png" alt="This is me"/>
                </div>
            </div>
        );
    }
}

export default Experience;
