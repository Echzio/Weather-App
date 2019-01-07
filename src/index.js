import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';
import './scss/style.scss';
import './particles/particles';
import Mask from './components/Mask';
import Music from './components/Music';
import App from './components/App';

const AppWithHot = hot(module)(App);



render(<AppWithHot />, document.getElementById('app'));
render(<Mask />, document.getElementById('mask'));
render(<Music />, document.getElementById('music'));