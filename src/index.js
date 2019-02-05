import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';

import './scss/style.scss';
import './particles/particles';

import Mask from './components/Mask';
import Music from './components/Music';
import App from './components/App';
import Preloader from './components/Preloader';

const AppWithHot = hot(module)(App);

/* preloader */
const preloader = () => {
  const element = document.getElementById('preloader');
  setTimeout(function() {
    element.classList.add('hidden');
    setTimeout(function() {
      element.remove();
    }, 1000);
  }, 3000);
};
document.addEventListener('DOMContentLoaded', preloader);
render(<Preloader />, document.getElementById('preloader'));
/* !preloader */

render(<AppWithHot />, document.getElementById('app'));
render(<Mask />, document.getElementById('mask'));
render(<Music />, document.getElementById('music'));
