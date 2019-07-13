import React from 'react';
import App from './App';
import { unmountComponentAtNode, render } from 'react-dom';

class Button extends React.Component {
  state = {
    open: true,
    name: 'свернуть',
  };

  ButtonClick = e => {
    this.setState(
      ({ open }) => ({ open: !open }),
      () => {
        this.StateApp(this.state.open);
        if (this.state.open) {
          this.setState({ name: 'свернуть' });
        } else {
          this.setState({ name: 'развернуть' });
        }
      },
    );
  };

  StateApp = choose => {
    choose
      ? render(<App />, document.getElementById('app'))
      : unmountComponentAtNode(document.getElementById('app'));
  };

  render() {
    return <button onClick={this.ButtonClick}>{this.state.name}</button>;
  }
}

export default Button;
