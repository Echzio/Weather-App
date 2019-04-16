import React from 'react';
import { render } from 'react-dom';
import './scss/style.scss';
import './particles/particles';
import Mask from './components/Mask';
import Button from './components/Button';
import App from './components/App';
import Preloader from './components/Preloader';

function* Loader() {
  yield document.getElementById('preloader').classList.add('hidden');
  yield document.getElementById('preloader').remove();
}

const LoaderState = Loader();

LoaderState.next();

const ReadyPage = () => {
  LoaderState.next();
};

document.addEventListener('load', ReadyPage);

render(<Preloader />, document.getElementById('preloader'));
render(<App />, document.getElementById('app'));
render(<Mask />, document.getElementById('mask'));
render(<Button />, document.getElementById('button'));
