import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Header from './header';
import Footer from './footer';
import LandingBody from './landing-body';

import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Header/>,document.getElementById('header'));
ReactDOM.render(<LandingBody/>,document.getElementById('landing-body'));
ReactDOM.render(<Footer/>,document.getElementById('footer'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
