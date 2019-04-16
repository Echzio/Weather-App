import React from 'react';
import { render } from 'react-dom';
import './scss/style.scss';
import './particles/particles';
import Mask from './components/Mask';
import Button from './components/Button';
import App from './components/App';
import Preloader from './components/Preloader';
const Preload = document.getElementById('preloader');

function* Loader() {
  yield Preload.classList.add('hidden');
  yield Preload.remove();
}

const LoaderState = Loader();

const ReadyPage = () => {
  LoaderState.next();
  Preload.addEventListener(
    'animationend',
    () => {
      LoaderState.next();
    },
    false,
  );
};

window.addEventListener('load', ReadyPage);

render(<Preloader />, document.getElementById('preloader'));
render(<App />, document.getElementById('app'));
render(<Mask />, document.getElementById('mask'));
render(<Button />, document.getElementById('button'));
