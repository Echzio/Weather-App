import React from 'react';
import { render } from 'react-dom';
import './scss/style.scss';
import './particles/particles';
import Mask from './components/Mask';
import Button from './components/Button';
import App from './components/App';
import Preloader from './components/Preloader';

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    document.getElementById('preloader').classList.add('hidden');
    setTimeout(function() {
      document.getElementById('preloader').remove();
    }, 1000);
  }
};

render(<Preloader />, document.getElementById('preloader'));
render(<App />, document.getElementById('app'));
render(<Mask />, document.getElementById('mask'));
render(<Button />, document.getElementById('button'));
