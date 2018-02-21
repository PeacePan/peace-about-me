import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Routes from './configs/Routes';

import './index.css';

ReactDOM.render(<Routes></Routes>,
    document.getElementById('root')
);

registerServiceWorker();
