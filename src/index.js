import React from 'react';
import {render} from 'react-dom';
import { hot } from 'react-hot-loader';
import './scss/style.scss';
import App from './components/App';

const AppWithHot = hot(module)(App);

render(<AppWithHot />, document.getElementById('app'));