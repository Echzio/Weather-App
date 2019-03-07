import React from 'react';

//let audio = new Audio();
//audio.src = './src/audio/music.mp3';

class Music extends React.Component {
  state = {
    name: 'свернуть',
    open: false,
  };

  ButtonClick = () => {
    /* music */
    let app = document.getElementById('app');
    this.state.open
      ? this.setState({ open: false, name: 'свернуть' }, () => {
          app.style.display = 'block';
        })
      : this.setState({ open: true, name: 'развернуть' }, () => {
          app.style.display = 'none';
        });

    // this.playMusic(this.state.state);
    //  this.playMusic(this.state.state);
  };

  // playMusic = props => {
  //   if (props) {
  //     audio.play();
  //   } else {
  //     audio.pause();
  //   }
  // };

  render() {
    return <button onClick={this.ButtonClick}>{this.state.name}</button>;
  }
}

export default Music;
