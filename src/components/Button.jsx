import React from 'react';

class Button extends React.Component {
  state = {
    open: true,
  };

  ButtonClick = () => {
    this.setState(
      ({ open }) => ({
        open: !open,
      }),
      () => {
        if (this.state.open) {
          document.querySelector('#button button').innerText = 'свернуть';
          document.getElementById('app').style.display = 'block';
        } else {
          document.querySelector('#button button').innerText = 'развернуть';
          document.getElementById('app').style.display = 'none';
        }
      },
    );
  };

  render() {
    return <button onClick={this.ButtonClick}>свернуть</button>;
  }
}

export default Button;
