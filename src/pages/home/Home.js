import React, { Component } from 'react';
import Button from 'material-ui/Button';

import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="page-home">
                <header className="home-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Button variant="raised" color="primary">
                    Hello World
                </Button>
            </div>
        );
    }
}

export default Home;
