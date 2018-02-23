import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import solid from '@fortawesome/fontawesome-free-solid';

import Routes from './configs/react/Routes';

import './index.css';

fontawesome.library.add(brands, solid);

ReactDOM.render(<Routes></Routes>,
    document.getElementById('root')
);

registerServiceWorker();
