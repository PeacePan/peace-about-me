import React from 'react';
import { List, ListItem, ListItemText,
    ListItemIcon, Collapse, Avatar,
    Divider, Hidden } from 'material-ui';

import WorkIcon from 'material-ui-icons/Work';
import InboxIcon from 'material-ui-icons/Inbox';
import ExpandLessIcon from 'material-ui-icons/ExpandLess';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import StarBorderIcon from 'material-ui-icons/StarBorder';

import './Experience.css';

const skillBarPriColor = '#f5aba6';
const skillBarSecColor = '#aaaaff';

const skillPercent = (percent, bgColor) => {
    let style = {
        width: percent,
        backgroundColor: bgColor
    };
    return (
        <span className="skill-percent" style={style}>{percent}</span>
    );
};

class Experience extends React.Component {
    constructor(props) {
        super(props);

        this.jobList = [
            {
                company: '豐豫投資有限公司',
                homePage: 'https://9thflr.com/',
                title: '前端工程師',
                beginToEnd: '2018-01 ~ 迄今'
            }, {
                company: '昆盈企業股份有限公司',
                homePage: 'http://www.geniusnet.com/',
                title: 'App 研發工程師',
                beginToEnd: '2016-08 ~ 2017-09'
            }, {
                company: '啟德電子股份有限公司',
                homePage: 'http://www.charder.com.tw/',
                title: 'App 研發工程師',
                beginToEnd: '2015-03 ~ 2016-06'
            }, {
                company: '映泰股份有限公司',
                homePage: 'http://www.biostar.com.tw/',
                title: '演算法工程師',
                beginToEnd: '2014-01 ~ 2015-02'
            }
        ];

        this.skillList = [
            {
                language: 'Javascript (ES5, ES6)',
                percent: '90%',
                iconClass: 'fab fa-2x fa-js-square',
                relates: [
                    {
                        name: 'jQuery',
                        iconClass: 'fab fa-2x fa-js-square',
                        percent: '90%',
                    }, {
                        name: 'Angular2+',
                        iconClass: 'fab fa-2x fa-angular',
                        percent: '85%',
                    }, {
                        name: 'AngularJS',
                        iconClass: 'fab fa-2x fa-angular',
                        percent: '80%',
                    }, {
                        name: 'nodeJS',
                        iconClass: 'fab fa-2x fa-node',
                        percent: '70%',
                    }, {
                        name: 'ReactJS',
                        iconClass: 'fab fa-2x fa-react',
                        percent: '60%',
                    }
                ],
                expand: false
            }, {
                language: 'HTML5',
                percent: '90%',
                iconClass: 'fab fa-2x fa-html5',
                relates: [],
                expand: false
            }, {
                language: 'CSS3',
                percent: '90%',
                iconClass: 'fab fa-2x fa-css3',
                relates: [
                    {
                        name: 'SASS, SCSS',
                        iconClass: 'fab fa-2x fa-sass',
                        percent: '80%',
                    }
                ],
                expand: false
            }, {
                language: 'C#',
                percent: '60%',
                iconClass: 'fab fa-2x fa-windows',
                relates: [
                    {
                        name: '.NET',
                        iconClass: 'fas fa-2x fa-code',
                        percent: '60%',
                    }
                ],
                expand: false
            }
        ];

        this.state = {
            skillList: this.skillList
        };

        this.handleSkillClick = this.handleSkillClick.bind(this);
    }

    handleSkillClick(ev, idx) {
        this.skillList[idx].expand = !this.skillList[idx].expand;
        this.setState({ skillList: this.skillList });
    };

    render() {
        return (
            <div className="page page-experience">
                <div className="overview job">
                    <div className="side-panel">
                        <div className="jobs">
                            <div className="panel-content">
                                <h3 className="title job-title">工作經歷</h3>
                                <Divider />

                                <List>
                                    {(() => this.jobList.map((job, i) => (
                                        <ListItem button key={i} component="a" href={job.homePage} target="_blank">
                                            <Avatar><WorkIcon /></Avatar>
                                            <ListItemText primary={job.company} secondary={job.title + ' - ' + job.beginToEnd} />
                                        </ListItem>
                                    )))()}
                                </List>
                            </div>
                        </div>
                    </div>

                    <Hidden xsDown implementation="css">
                        <div className="person-container">
                            <img src="image/person.png" alt="This is me"/>
                        </div>
                    </Hidden>
                </div>

                <div className="overview skill">
                    <div className="panel-content">
                        <h3 className="title skill-title">技能樹</h3>
                        <Divider/>

                        <div className="skill-container">
                            <List>
                                {(() => this.state.skillList.map((skill, i) => (
                                    <div key={i}>
                                        <ListItem button className="skill-item" onClick={(ev) => this.handleSkillClick(ev, i)}>
                                            <ListItemIcon>
                                                <i className={skill.iconClass}></i>
                                            </ListItemIcon>
                                            <ListItemText inset primary={skill.language} secondary={skillPercent(skill.percent, skillBarPriColor)} />
                                            {skill.relates.length ? (skill.expand ? <ExpandLessIcon /> : <ExpandMoreIcon />) : null}
                                        </ListItem>

                                        <Collapse in={skill.expand} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                {(() => skill.relates.map((relate, j) => (
                                                    <ListItem key={j} className="skill-item nested" button>
                                                        <ListItemIcon>
                                                            <i className={relate.iconClass}></i>
                                                        </ListItemIcon>
                                                        <ListItemText inset primary={relate.name} secondary={skillPercent(relate.percent, skillBarSecColor)} />
                                                    </ListItem>
                                                )))()}
                                            </List>
                                        </Collapse>
                                    </div>
                                )))()}
                            </List>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;
