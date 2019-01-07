import React from 'react';

let audio = new Audio();
audio.src = './src/audio/music.mp3';

class Music extends React.Component {
    state = {
        name: 'свернуть',
        state: false
    }

    ButtonClick = () => {

        /* music */
        let app = document.getElementById('app');
        if (this.state.state) {
            this.setState({
                state: false,
                name: 'свернуть'
            }, () => {
                this.playMusic(this.state.state);
                app.style.display = 'block';
            })

        } else {
            this.setState({
                state: true,
                name: 'развернуть'
            }, () => {
                this.playMusic(this.state.state);
                app.style.display = 'none';
            })
        }
    }

    playMusic = (props) => {
        if (props) {
            audio.play();
        } else {
            audio.pause();
        }
    }


    render() {
        return (
            <button onClick={this.ButtonClick}>{this.state.name}</button>
        )
    }
}

export default Music;