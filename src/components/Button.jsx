import React from 'react';
import App from './App';
import { unmountComponentAtNode, render } from 'react-dom';

class Button extends React.Component {
  state = {
    open: true,
  };

  StateApp = choose => {
    choose
      ? render(<App />, document.getElementById('app'))
      : unmountComponentAtNode(document.getElementById('app'));
  };

  ButtonClick = () => {
    this.setState(
      ({ open }) => ({ open: !open }),
      () => {
        if (this.state.open) {
          document.querySelector('#button button').innerText = 'свернуть';
        } else {
          document.querySelector('#button button').innerText = 'развернуть';
        }
        this.StateApp(this.state.open);
      },
    );
  };

  render() {
    return <button onClick={this.ButtonClick}>свернуть</button>;
  }
}

export default Button;
